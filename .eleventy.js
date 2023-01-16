const pluginRss = require("@11ty/eleventy-plugin-rss");
const metagen = require('eleventy-plugin-metagen');

const { getOrderedPosts, getPostDate, buildJS } = require("./utils");

module.exports = (function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/favicon.png');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addWatchTarget("./src/js/");
  // for blog lists
  eleventyConfig.addCollection("orderedPosts", (collection) => getOrderedPosts(collection));
  // for copyright in footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // make a friendly date for post listings and pages
  eleventyConfig.addFilter("postDate", (dateObj) => getPostDate(dateObj));
  // build js bundle with esbuild
  eleventyConfig.on("eleventy.before", () => buildJS())
  eleventyConfig.addPlugin(metagen);
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});