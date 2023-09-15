---
tags: web development
title: Getting API Results with PHP and Doing Something With Them
publish: true
excerpt: With some help from ChatGPT, I created a working example of combining multiple request results from Eventbrite's API and displaying them on a webpage within the Silverstripe framework.
templateEngineOverride: njk,md
---
A need arose at work for displaying a list of Eventbrite events on a webpage with the expectation being that this list would update dynamically.

Eventbrite, for whatever reason, does not provide a snap in widget for non-Wordpress websites, which this website is. They do have an app marketplace that sells a 3rd party solution with an annul fee and the inherent inflexibility of vender maintained markup.

On the other hand, Eventbrite provides an API which provides more functionality with their platform than I would ever need for this project. 

Despite it's overkill of features, I'm choosing the API route. It has the advantage of not being beholden to a 3rd party's development decisions and will allow us to design its frontend however we like.

## What Does This Thing Need to Do?

1. Authenticate and retrieve event list data from our client's Eventbrite account
2. Serve this request result from an endpoint on our site's server
3. Handoff the data from our own endpoint in step 2 to the front end
4. Format, style and display the event on 1 or more pages of our website

## Accessing the API

Eventbrite's API is available to anyone with an account on their platform after creating an "Eventbrite app". Since this is included with the free tier, I created my own account to test with. I was surprised to find that there seems to be nothing preventing the creation of public events for random locations. I created some test events at a place in Helsinki called *Karaoke Bar Restroom*. To be safe, I published these events as "private" and limited their capacity to 1. Time will tell if I get any angry calls about *My Test Event 1* which will take place in October.

I've written the code for accessing event data in PHP. As is recommended, making requests from the API is done from the server side in order to protect the API key, or specifically the private token provided in the account settings.

So, the process here is: you retrieve data from the vendor with server-side code (PHP for me), then create your own endpoint that your frontend code (Javascript) makes requests to and displays.

## ChatGPT and Building the PHP Part

To be honest, I haven't had a lot of experience working with APIs in PHP. This being the case I was interested in how much help I could get from ChatGPT using their free 3.5 version. 

My first naive prompt was simply: *"With PHP, write a script that uses the Eventbrite api to list all events by an organizer"*. It immediately responded with an answer complete with explanations. 

The answer used placeholders where any private token or API keys should be entered. You should of course never type any of that stuff into ChatGPT.

The code made sense and was easy to understand, but it didn't work. One problem is that ChatGPT assumed I wanted the script to obtain my private token programmatically, which in my case is unnecessary. I wasn't creating an app where the user would be logging into Eventbrite. I can obtain that from the account settings. It also suggested using the `stream_context_create` and `file_get_contents` PHP functions where I would prefer to use cURL. I didn't bother to debug it and just tried a new prompt.

Interestingly, differently worded prompts suggested different request solutions. At one point it suggested using Guzzle, a PHP HTTP client. But what I was doing was simple enough to use cURL, which is almost always enabled. After a couple of more answers I had a working script to polish up.

But there was one more thing to solve. I  want to display both the event information and the venue name. Eventbrite treats venues as separate records from events. The event object only contains a venue ID, so a second request would have to be made get their names. Furthermore, the results of these 2 requests would need to be combined.

So I went back to ChatGPT and tried asking for the events *with* the venue names. This failed. Although ChatGPT seems to have a pretty good understanding of what the response format from the API should look like, including key names, it seemed to be missing some of the facts. It was suggesting that I simply pull the venue name from the "venue_name" key in the event object...only there is no venue name key, only an venue id. Perhaps it was using a deprecated feature?

So not knowing if I could be so specific, I tried the following prompt: *"in php use the eventbrite api and cURL to return a list of events and then make a second api call to the api to return the venue name using the venue id in each event from the first request result. Then combine these 2 results so that they may be consumed by a client"*

This level of specificity payed off. I could have almost copy/pasted it directly into my IDE. All the steps where there, but I needed to clean up how it was authenticating the request. 

More interestingly, I saw what might had been an undetected inefficiency. For the venue names, it suggested looping though the event results and making a new request to the venue endpoint in each iteration of the loop. Though generous, there is a limit to the requests per hour for this API. Further, the loop would of had to wait for a response for each event.

To improve this I retrieved all of the venues separately and stashed these into a simplified array. Then, similar to ChatGPT's suggestion, I looped though the events and added a property in each of the event objects called `venue_name`.  Encode, echo and its done! 

```php
// using m1/env to get my .env value for the private token
$env = new Parser(file_get_contents('../.env'));
$env_arr = $env->getContent();

$PRIVATE_TOKEN = $env_arr['EVENTBRITE_PRIVATE_TOKEN'];

$ORG_ID = "..."; // the organization's ID;

// Eventbrite's endpoints
$ch_events = curl_init("https://www.eventbriteapi.com/v3/organizations/$ORG_ID/events/");
$ch_venues = curl_init("https://www.eventbriteapi.com/v3/organizations/$ORG_ID/venues/");

curl_setopt($ch_events, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch_events, CURLOPT_HEADER, FALSE);
curl_setopt($ch_events, CURLOPT_HTTPHEADER, array(
	"Authorization: Bearer $PRIVATE_TOKEN"
));

curl_setopt($ch_venues, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch_venues, CURLOPT_HEADER, FALSE);
curl_setopt($ch_venues, CURLOPT_HTTPHEADER, array(
	"Authorization: Bearer $PRIVATE_TOKEN"
));

// Initialize multiple cURL requests. This runs both requests in parallel.
$mh = curl_multi_init();
curl_multi_add_handle($mh, $ch_events);
curl_multi_add_handle($mh, $ch_venues);

// Execute multiple cURL requests
$curl_exec_running = null;
do {
	curl_multi_exec($mh, $curl_exec_running);
} while ($curl_exec_running);

// Check for cURL errors
if (curl_multi_errno($mh)) {
	echo 'Error: ' . curl_multi_errno($mh);
}

// Get the results of each cURL request
$event_response = curl_multi_getcontent($ch_events);
$venue_response = curl_multi_getcontent($ch_venues);

// Decode the JSON responses
$events = json_decode($event_response, true);
$venues = json_decode($venue_response, true);

// Clean up cURL resources
curl_multi_remove_handle($mh, $ch_events);
curl_multi_remove_handle($mh, $ch_venues);
curl_multi_close($mh);

// Check if the event request was successful
// and separate events into an new array
if (isset($events['events'])) {
	$event_list = $events['events'];
} else {
	echo 'Error: Unable to fetch events.';
	exit;
}

// Check if the venue request was successful
// and separate venues into a new array
if (isset($venues['venues'])) {
	$venue_list = $venues['venues'];
} else {
	echo 'Error: Unable to fetch venues.';
	exit;
}

// Define an simpler array to store venue names
$venue_names = [];
foreach ($venue_list as $venue) {
	$venue_names[$venue["id"]] = $venue["name"];
}

// Combine event details with venue names
foreach ($event_list as &$event) {
	$event_venue_id = $event['venue_id'];

	if (isset($venue_names[$event_venue_id])) {
		$event['venue_name'] = $venue_names[$event_venue_id];
	}
}

header('Content-Type: application/json');

echo json_encode($event_list, JSON_PRETTY_PRINT);
```

## Building the Javascript Part

Javascript's fetch API seems to be be the best way today to retrieve data from an API in the browser. So, I'll be using a JS API, to request data from my API which requested data from a vendor API. **API**.

As with the PHP script above, I asked for help from ChatGPT to fill gaps in my experience. I asked it for the best way to go about error handling, and how to use moment.js to handle time formats more easily that javascript's native methods.

The below script assumes some elements on the HTML page, loops though the retrieved list of events and attaches a new list item to `".event-list ul"` for each. I've left out the CSS for brevity.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
```

```javascript
const eventList = document.querySelector(".event-list ul");
const preloader = document.querySelector(".preloader");
const apiRequest = async function () {
	const response = await fetch(/* /path/to/my/endpoint */)
		.then((response) => {
			
			// Check if the response status is OK (status code 200)
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			// If the response is okay, parse the JSON data
			return response.json();
		})
		.then((data) => {
			
			// Process the JSON data if the request was successful
			console.log("Data received:", data);
			const output = data;
			let template = "";
			
			output.forEach((event) => {
				const event_name = event.name.text;
				const event_url = event.url;
				const event_desc = event.description.text;
				const event_start = new Date(event.start.local);
				const event_end = new Date(event.end.local);
				const event_month = event_start.toLocaleString("en-US", {
					month: "short",
				});
				const event_day = event_start.getDate();
				const dayNumber = event_start.getDay();
				const daysOfWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];
				const event_dayofweek = daysOfWeek[dayNumber];
				const event_starttime = moment(event_start).format("h:mm A");
				const event_endtime = moment(event_end).format("h:mm A");
				
				let event_venue;
	
				if (event.online_event === true) {
					event_venue = `<a href="${event_url}" target="_blank">
						Online Event
					</a>`;
				} else {
					event_venue = event.venue_name;
				}
	
				template += `
	
					<li>
						<div class="event-row">
							<div class="date-box-col">				
								<div>${event_month}</div>				
								<div>${event_day}</div>				
								<div>${event_dayofweek}</div>				
							</div>				
							<div class="info-col">			
								<h2>
									<a href="${event_url}" target="_blank">
										${event_name}
									</a>
								</h2>						
								<p>${event_desc}</p>
								<div class="start-end-time">
									${event_starttime} - ${event_endtime}
								</div>
								<div class="location">${event_venue}</div>			
							</div>				
						</div>				
					</li>
					`;
			});
			eventList.innerHTML = template;
			preloader.innerHTML = "Loaded!";
			preloader.dataset.status = "loaded";
			eventList.style.opacity = 1;
	
		})
		.catch((error) => {
			// Handle errors that occurred during the fetch 
			// or in the previous then block
			console.error("Fetch error:", error.message);
		});
};
apiRequest();
```

{% blogImage filename="api-events-results", caption="My test events", alt="a screen shot showing a list of test events with silly names" %}
## Bringing This to a Real Website with Silverstripe CMS

Working with my employer we hired a firm several years ago to build a number of websites that I would maintain going forward. This company uses an open source framework and CMS called [Silverstripe](https://www.silverstripe.org) which I'd come to enjoy working with. Silverstripe is based in New Zealand and is therefore maintained by a group of nerdy, lovable hobbits.

Briefly, our installations include their CMS module built on top of a framework that, with [ORM](https://docs.silverstripe.org/en/5/developer_guides/model/data_model_and_orm/), allows you to add fields to a database with PHP classes and display those fields with their templating language mixed in with HTML templates.

It's a MVC design pattern, and the system uses controller classes that can mix things up when you require more than just CRUD.

It is within one of these controller classes that I would implement the above Eventbrite API request script, creating an endpoint from which I could request an events list to display within a Silverstripe template.

Silverstripe uses *actions* which are public methods which may be called via a route that includes their name. In my case I've created an action called "events". In the browser, the javascript could use this action with `fetch('/home/events')`. I implemented this in `PageController`, which can be extended by other controllers for other [page types](https://docs.silverstripe.org/en/5/developer_guides/templates/template_inheritance/#template-types-and-locations/) (ie. `HomePageController`). This way all page types have access to this action. 

So, in the fetch example from the previous paragraph, I could instead use the Silverstripe `$Link` template variable like this: `fetch($Link+'events')"`. `$Link` returns the URL segment for the current page.

```php
// PageController.php

namespace {

    use SilverStripe\CMS\Controllers\ContentController;
    use M1\Env\Parser;

    class PageController extends ContentController
    {
        /**
         * An array of actions that can be accessed via a request. 
         *
         * @var array
         */
        private static $allowed_actions = ['events'];

        protected function init()
        {
            parent::init();
        }
        public function events()
        {
	        // All the PHP in the first snippet of this article above
        }
    }
```

## What Else Can This Thing Do?

With what I've learned and accomplished above, I'll be able to bring an Eventbrite events list to a website built with PHP or Silverstripe and it will update when our client updates their events. After a page load anyway.

A next step might be to create a [Silverstripe module](https://docs.silverstripe.org/en/5/developer_guides/extending/modules/), basically a composer package. This way in future projects I could composer require it, set some config and like magic I have an Eventbrite event listing that needs only to be included and styled.

Also I've only tapped the surface of the API which allows for writing as well as reading.

If you're reading this (wow, thanks) and see something above that looks completely bonkers, irresponsible or ill advised, please [send me a message](/connect/) about it so I might [repent and leave my evil ways](https://youtu.be/QFtSVe0uHvc?si=QDdO-P-7qQboLjYJ&t=22).