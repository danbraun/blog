---
tags: web development
title: RenderATL - Day 1
publish: true
excerpt: RenderATL Developer Conference in Atlanta, GA
templateEngineOverride: njk,md
---
My job sends us to one conference a year and I wanted to go to "An Event Apart". Alas [this would not be](https://aneventapart.com/). That conference did not survive the economic pressures of the pandemic and will no longer be happening. 

Looking around online I found RenderATL. Though originally conceived for discussions around React, which I don't use, the event has become more generalized according to it's [website](https://www.renderatl.com/).

## Arrival

The conference began on May 31st with workshops, but I couldn't arrive until late that day. So being free to just relax I chomped on a huge Atlanta burger (these include fried green tomatoes on top of the meat) and perused the schedule of speaking events starting the next day.

The next morning I ran a route around the surrounding "hotel district", as its called. I ran past hotels, stadiums and the Centennial Olympic Park, location of the 1996 Olympic games.

Back at the hotel, finding the registration area was a small adventure. After spending a couple dozen minutes wandering down escalators and across sky walks I spotted 2 guys taking a selfie in front of a RenderATL sign. They knew where to at least start heading so I joined them. Some time after that we found ourselves in a long line snaking out the door and down the sidewalk along a building adjacent to the hotel.

Reaching the head of the line, we were frisked and our bags searched. I briefly thought that this security might be overkill, but anyone watching the news in the United States would think again.

With a laniard finally slung around my neck I traversed a few flights of escalators and found the Main Stage. It was 9:00 AM and time for the first speaker. But it wouldn't be until sometime after 9:30 before Banjo Obayomi took the stage to speak at a frenzied pace about generative AI. 

## Day 1 Talks
### Banjo Obayomi

{% blogImage filename="banjo_obayomi", alt="Speaker Banjo Obayomi on stage at RenderATL", caption="Banjo Obayomi" %}

[Banjo](https://github.com/banjtheman) had an interesting and timely presentation but needed to cram it all into around 10 minutes due to the late start. I don't think that was on him, the conference perhaps had too many attendees to process. 

He discussed word graphs, transformers, large language models (LLM) and so on. Working at Amazon, he had some AWS products to talk about, as well as his own projects.

[Amazon CodeWhisperer](https://aws.amazon.com/codewhisperer/) uses AI to assist in writing code. Something like Github's Copilot. Something called [Jupyter](https://catalog.workshops.aws/hpc-slurm/en-US/introduction/sagemaker-intro) allows you to share documents that contain live code, text and other visualizations.

Banjo has also written a book with AI, a chatbot and something that uses ChatGPT to generate AWS Lambda functions.

### Paolo Mariselli

[Paolo](https://www.paolamariselli.com/), director of product design at Bumble, spoke about good and bad managers. This was first of several "leadership" talks I added to my track. The opportunity for promotion to management hasn't presented itself at my job, nor am I especially hoping to transition to a management role. But to be frank, it could be a big boost in income and a fresh path - a break from patterns? Also, leadership skills are useful to anyone working on a team.

Anyway this speaker made the case that good managers improve almost everything about a company's culture, productivity and profit. And, surprisingly, to support your individual contributors (or "IC", a new term for me) even if their path leads to a different employer.

### Ashton Fizer

{% blogImage filename="ashton_fizer", alt="Speaker Ashton Fizer on stage at RenderATL", caption="Ashton Fizer" %}

[Ashton](https://heyashten.com/) walked us through setting up a completely browser based augmented reality application. She made the point that requiring users to download an app to their mobile device is exclusionary and that having something that runs completely in a browser democratizes the experience you've developed.

Her example incorporated [three.js](https://threejs.org/), [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) and [WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API). Some of the setup requires Java to interact with WebGL. 

I'll be interested to try this myself as aside from what she promised was some simple Java, everything else sits on an HTML page and seems achievable with only front-end coding and some server setup.

### Jose Rodriguez Salinas

Jose, a senior software engineer at Dropbox, discussed going "beyond code": the difference between working as an individual contributor and taking on a leadership role in your organization. 

He presented a concept he called "The Chasm", the gulf between being the coder siloed within a part of a project versus having knowledge and influence over the entire project.

On one side of the chasm, you work within a well defined scope getting specific tasks done. Across this chasm you're involved with deciding _what_ tasks need to get done, who should be involved and what might need to happen further down the roadmap. And as you progress from there, you're working outside your team to create new projects and initiatives.

This speaker then concluded with sharing design document templates, referring to technical blogs, like Airbnb's and introducing the idea of employee research groups (ERGs).

### Matt Diamler
This mid-day presentation was done in a fire-side chat style with [Matt, Senior VP of Product](https://www.linkedin.com/in/mattdaimler/) at [Zillow](https://www.zillow.com/), being interviewed on stage. 

I didn't take any notes here as this was more an inspirational session. Matt created the company that originally allowed passengers to choose their seats on flights, which was bought by Expedia. He then co-founded another company that created an app for realtors to use, which was then bought by Zillow which brought him to his current role at that company. I'd say Matt's doing OK.

And Matt seems OK, better than OK. I've heard people talk about certain "magnetic" personalities but this was a first hand look at the real thing. It was easy to see why this man isn't just lucky (though he made it clear that he was aware of his privilege). When speaking about his work, he emits a childlike joyfulness in all directions. Approachable in the extreme.

### Izhar Buendia
A product designer at Netflix, Izhar focused on using design in business decisions. Honestly, the standout for Izhar's talk were his slides that listed the salaries of major market, big company designers. These ranged from $400K - $700K.

After recovering from the reminder of how impoverished we all were, he went on to describe design as different from art in that it works to provide solutions as opposed to asking questions. He stepped through historical references to this idea in Taoism, Feng Shui (and the big bucks paid for this), Hippocrates' ergonomics and the industrial revolution and the efficiency gains of placing workers in the right position next to machines. 

Izhar then briefly explained the [Human Processor Model](https://en.wikipedia.org/wiki/Human_processor_model) and the work done by professor John M. Carroll to describe the role of design in optimizing the interaction between people and computers. [Jared Spool](https://www.uie.com/), a major player in the UX space, was mentioned. And the statement that there is a 1:100 return on investment in user experience.

Mr. Buendia concluded with a few real world examples including Airbnb's push in 2021, during the pandemic, to make hosting mainstream and using design to surface the concept of Superhosts - mentors to new hosts, General Electric's creation of the UX Center of Excellence and Uber's 2015 expansion to countries outside the US where cash, not electronic payments were commonplace. Design was used to successfully implement this cash workflow.

### Taylor Poindexter
Taylor is a software engineer manager at Spotify. Her talk was similar to Jose's and also addressed expanding your role in your company. 

While Jose shared his ideas on what it looked like to take on a leadership role, Taylor's talk focused on looking inward and deciding how it would work for you and what that change would look like.

It was a frank discussion about the realities of being responsible for other people. This type of work has different challenges and will be hard. And that difficulty increases with team size - varying personalities multiplied by the number of people under your charge. It will be a balancing act between flexibility &mdash; mistakes will happen &mdash; and rigidity &mdash;  will someone need to be addressed for being disrespectful?

No longer will you be hiding in a pair of headphones with a predictable schedule for the day. You'll need to account for things that come up and also be aware of your own biases and triggers when dealing with your team. Taylor suggests taking an interest in your team, having one on ones that are separate from just project updates.

She also made the case that managing may not be something you take on forever - a "pendulum career" she called it, where you switch between a leadership and individual contributor.

### Homer Ganes
At my job we're beginning to address accessibility in all of our websites, and Homer's talk on designing for ADA compliance was timely.

A UI engineer with a somewhat dour delivery, Homer warned us with statistical data on the correlation between non-compliant visual design and the frustration of low vision users (LVU). Examples where shared of what a LVU would have to do if a zoomed in screen now places content off screen &mdash; being forced to use keyboard shortcuts &mdash; and other basic requirements such color contrast ratios, heading usage, font sizes and more.

Lastly he drove home the point of empathy: cognitive, emotional and compassionate.

### Chris Coyier

{% blogImage filename="chris_coyier", alt="Speaker Chris Coyier on stage at RenderATL", caption="Chris Coyier" %}

I "know" Chris from being a fan the podcast he co-hosts with Dave Rupert, "[ShopTalk](https://shoptalkshow.com/)". Chris also co-founded [codepen.io](https://codepen.io/) as well as creating the website [CSS-Tricks](https://css-tricks.com/) which he sold to DigitalOcean in 2022. If you work on websites you know all of these places.

He started of with a "venn diagram" that illustrated the intersection between websites and websites with CSS. It was a circle 😆

This set the mood for the remainder of his talk. I personally enjoyed the humor he brought to describing new CSS features that will solve old problems. New ways to place things (subgrid, masonry) size things (inline/block size, cqi units, container queries), color things (oklch), gain more control over the cascade (@layer) and move things (view-transition).

If we learned nothing else: inline goes this way: ← → and block goes that way: ↑ ↓

## Day 1 Conclusion

The first day of sessions at RenderATL spanned a number of topics that were somewhat or completely relevant to me. The schedule did slip around and some sessions got moved, but I did not end up sitting at a talk I couldn't derive some knowledge from. 

I did notice that most of the talks were more informative than hands on. Maybe this was what I had missed from not being there for the workshops the day before, but in other developer conferences I've enjoyed running a _npm install_ or two and actually coding along with the presenter. Mostly, we watched PowerPoint decks and took notes. 

As for the vendors, I made it over to that area during lunch but couldn't find much interest in it as I'm neither looking for a job nor do I develop enterprise apps that need a serverless video encoding solution, for example. Github's booth had cool stickers though.