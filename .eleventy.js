const pluginRss = require("@11ty/eleventy-plugin-rss");
const metagen = require('eleventy-plugin-metagen');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const { getOrderedPosts, getPostDate, buildJS, blogImage } = require("./utils");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(metagen);
  eleventyConfig.addPlugin(syntaxHighlight, {
    codeAttributes: {
      style: 'font-size: 0.8em'
    },
  })
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addWatchTarget("./src/js/");
  // for copyright in footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // make a friendly date for post listings and pages
  eleventyConfig.addFilter("postDate", (dateObj) => getPostDate(dateObj));
  // build js bundle with esbuild
  eleventyConfig.on("eleventy.before", () => buildJS());
  // add blogImage shortcode, cache image info
  eleventyConfig.addNunjucksAsyncShortcode("blogImage", (params) => blogImage(params));
  // return a list of tag names excluding some
  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
		return (tags || []).filter(tag => ["post"].indexOf(tag) === -1);
	});
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};