const pluginRss = require("@11ty/eleventy-plugin-rss");
const { getOrderedPosts, getPostDate, buildJS } = require("./utils");

module.exports = (function (eleventyConfig) {
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

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});