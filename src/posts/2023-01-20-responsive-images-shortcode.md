---
tags: web development
title: Eleventy, Images and Cloudinary
publish: true
excerpt: Using an Eleventy shortcode and Cloudinary for responsive images to my blog.
templateEngineOverride: njk,md
---
Recently I had to figure out a way to serve images in my posts that not only worked, but performed well.

## Eleventy
This site, my first [Eleventy](https://www.11ty.dev/) site, works by generating static pages from Nunjucks templates and markdown files. Eleventy is flexible in what kind of files it uses, but that's how I'm using it. Blog content (not images - see below) and code all live together in a Git repository on Github. To serve the site, I have a free Netlify account that watches this repo and builds it's static pages when things change. 

## Cloudinary
Strictly speaking, Netlify is not entirely serving the site. 

In most of my posts I want to add images. Though its possible to add website images directly into the repository with everything else, its not a good idea for a number of reasons. There are several solutions to this, like Git's "large file storage" (LFS) - which Netlify provides tools for.

But I've had a [Cloudinary](https://cloudinary.com/) account sitting dormant for years. I had used for a long abandoned blog. Hopefully this blog doesn't suffer a similar fate.

Cloudinary can be used to add images to a static site which has no server storage or database of its own. I simply use Cloudinary's website interface to upload images I want to use on my site, and Cloudinary generates a URL to access those images. Whats more is you can add "transformations", extra segments to that URL, and it will return that image resized or altered in some way.

Like Netlify, I'm also using the free tier at Cloudinary. Notice a theme? Cloudinary's free tier seems generous enough - though difficult to explain so I won't do that here, suffice it to say there's a limit to the number of transformations allowed per month.

## Lighthouse and CLS
So my first idea for displaying photos worked pretty well. I finally got my head around `srcset` and `sizes` and could use Cloudinary to request small, medium and large versions of each image to fill in the `srcset` attribute each time the site builds.

```javascript
const source_low = "https://res.cloudinary.com/*******/image/upload/c_scale,w_400/f_auto/blog/filename";
const source_med = "https://res.cloudinary.com/*******/image/upload/c_scale,w_800/f_auto/blog/filename";
const source_high = "https://res.cloudinary.com/*******/image/upload/c_scale,w_1600/f_auto/blog/filename";
return `<figure>
      <img src="${source_low}" 
           srcset="${source_low} 400w,
           ${source_med} 800w,
           ${source_high} 1600w"
           sizes="(min-width: 768px) 768px, 100vw"
           alt="alt text" 
           loading="lazy">
    <figcaption>caption text</figcaption>
  </figure>`
```
This is great because I never have to resize and keep track of extra copies of images.

But something is missing. Chrome's, Lighthouse told me so. Most easily accessed under a tab in Chrome's dev tools, Lighthouse is there to judge you and your website. Ok, maybe not you - and really, its trying to help.

In my case, under it's "Performance" metrics, I needed to pay more attention to CLS or "Cumulative Layout Shift". Simply, my pages were sliding content around as images downloaded. Maybe not as noticeable on faster connections, the browser was in fact downloading text faster than images. Because I hadn't bothered to **tell the browser how much space the images would occupy** before they arrived, the images were just rudely shoving content out of their way.

## My Solution to CLS: Shortcode and Cloudinary's Metadata GET Request

In the previous code example you may have noticed the glaring omission of width and height attributes in the `<img>` tag. If not, you can be forgiven as many of us have grown to consider them as quaint vestigial attributes from a time before CSS.

However, modern browsers now use the width and height image attributes to calculate an aspect ratio and use this data to save a spot for those rude images. Thereby reducing CLS.

Now here's what I had to solve: 

I could manually pass a known width and height *every time* I added an image to my blog. But that would suck.

Or, I could just make every image the same size and hard code a width and height. That would also suck - are my photos and screen shots not... Art?

Therefore, I needed a way dynamically obtain each image's width and height at build so Eleventy could render my image tags with whatever its dimensions happened to be. Note that even though I'm referencing a set of images for srcset, only the dimensions of one of them needs to be known. The browser needs only to calculate an aspect ratio - which is the same for all these uniformly scaled images.

It took me a couple of nights of searching the web, reviewing [excellent blogs like Raymond Camden's](https://www.raymondcamden.com/2022/11/04/adding-responsive-images-with-cloudinary) and asking questions online to arrive at a simple API request to Cloudinary that works just like how I was already requesting images. Instead I needed to use a "transformation" called [fl_getinfo](https://cloudinary.com/documentation/transformation_reference#fl_getinfo).

Oddly, it doesn't transform a resulting image, but instead returns a JSON string with the image's metadata. For example, `https://res.cloudinary.com/*********/image/upload/fl_getinfo/blog/beans.jpg` may return something like:
```json
{
  "input": {
    "width": 1600,
    "height": 1200,
    "bytes": 358731
  },
  "output": {
    "format": "jpg",
    "bytes": 307179,
    "width": 1600,
    "height": 1200
  }
}
```
Once everything was setup, in my blog post markdown files I could drop in a shortcode wherever I wanted an image:

```nunjucks
<!-- blog-post.md -->
{% raw %}
{% blogImage filename="rockisland", alt="Sunrise on Rock Island", caption="Sunrise on Rock Island" %}
{% endraw %}
<!-- omitting the filetype suffix will allow Cloudinary to choose a suitable format -->
```
Make sure to set `templateEngineOverride: njk,md` in the front matter so Eleventy runs markdown files though the Nunjucks engine first and process the shortcodes.

Here is what the function for the `blogImage` shortcode looks like. I'm using the Eleventy plugin `eleventy-fetch` to cache results, which I'll explain below.
```javascript
/* utils.js */
const eleventyFetch = require("@11ty/eleventy-fetch");

const blogImage = async (params) => {
    const source_low = `https://res.cloudinary.com/***********/image/upload/c_scale,w_400/f_auto/blog/${params.filename}`;
    const source_med = `https://res.cloudinary.com/***********/image/upload/c_scale,w_800/f_auto/blog/${params.filename}`;
    const source_high = `https://res.cloudinary.com/***********/image/upload/c_scale,w_1600/f_auto/blog/${params.filename}`;
    const infoURL = `https://res.cloudinary.com/***********/image/upload/fl_getinfo/blog/${params.filename}`;
    let width = 0;
    let height = 0;
    const result = await eleventyFetch(infoURL, {
        duration: "1y",
        type: "json"
    }).catch((error) => {
        console.log(`oh no...${error}`)
    })
    width = result.output.width;
    height = result.output.height;
    return `<figure>
      <img src="${source_med}" 
           srcset="${source_low} 400w,
           ${source_med} 800w,
           ${source_high} 1600w"
           sizes="(min-width: 768px) 768px, 100vw"
           alt="${params.alt}" 
           loading="lazy"
           width="${width}"
           height="${height}">
    <figcaption>${params.caption}</figcaption>
  </figure>`
}
```
I start by declaring the function as `async` so I can use `await` later for the API request. The params argument contains a filename, caption and alt text from the shortcode call coming from markdown files.

Then I set variables to hold 3 URLs used by srcset for different sizes and 1 more URL for requesting the image metadata. Two more variables are added for width and height.

Next is where I obtain the file meta data in JSON format. `result` is the object holding these values and I access them with dot notation.

Finally I build the HTML string and mix in all the values obtained above, including the all important width and height. 

I then require this function into my .eleventy.js so that I can create the shortcode referencing it using the config object's `addNunjucksAsyncShortcode` method. The async version is required in this case.

```javascript
/* .eleventy.js */
const { blogImage } = require("./utils");

module.exports = (function (eleventyConfig) {
// ...
  eleventyConfig.addNunjucksAsyncShortcode("blogImage", (params) => blogImage(params));
// ...
}
```

The [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/) plugin was an unintentional find during this process of discovery. But it made sense to use it.

```javascript
const result = await eleventyFetch(infoURL, {
        duration: "1y",
        type: "json"
    }).catch((error) => {
        console.log(`oh no...${error}`)
    })
```
It creates a `.cache` folder in the root of your project, and in my case its saving each of the json strings that Cloudinary is sending me with my fl_getinfo requests. For one year. 

This is only relevant during local development, though there are some hoops you can jump though to have Netlify open access to a `.cache` folder during production builds. I'm only using it locally though to prevent unnecessary transitions and perhaps cut down on build times once I have more than 5 blog posts.

This all results in a handsome `<figure>` element after the site builds.

```html
<figure>
      <img src="https://res.cloudinary.com/brauntrutta/image/upload/t_blog-med/blog/rockisland" 
      srcset="https://res.cloudinary.com/brauntrutta/image/upload/t_blog-low/blog/rockisland 400w,
           https://res.cloudinary.com/brauntrutta/image/upload/t_blog-me/blog/rockisland 800w,
           https://res.cloudinary.com/brauntrutta/image/upload/t_blog-high/blog/rockisland 1600w" 
           sizes="(min-width: 768px) 768px, 100vw" 
           alt="Sunrise on Rock Island" 
           loading="lazy" 
           width="1600" 
           height="1200">
    <figcaption>Sunrise on Rock Island</figcaption>
  </figure>
```

## Conclusion

I didn't anticipate digging quite so deep into making some images appear on my blog site. I haven't even got pagination figured out yet! But I'm really happy to appease our Lighthouse overlords.

This idea could be extended. For example, I could add more parameters to return a smaller, floated image. Currently all my images using this shortcode take up the full with of the main column.

Since I couldn't bare the irony of ending this post as the only entry without an image, here's some vegetables:

{% blogImage filename="six-buttercup-squash", alt="Buttercup squash lined up on a deck railing", caption="Buttercup squash from my garden, 2022 season" %}