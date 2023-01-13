const pluginRss = require("@11ty/eleventy-plugin-rss");
const { getOrderedPosts, getPostDate } = require("./utils");

module.exports = (function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addWatchTarget("./src/scss/");
  // for blog lists
  eleventyConfig.addCollection("orderedPosts", (collection) => getOrderedPosts(collection));
  // for copyright in footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  // make a friendly date for post listings and pages
  eleventyConfig.addFilter("postDate", (dateObj) => getPostDate(dateObj));
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});