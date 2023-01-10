const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = (function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addWatchTarget("./src/scss/");
  eleventyConfig.addCollection("orderedPosts", function (collection) {
    return (
      collection
        // Change to the name of your tag
        .getFilteredByTag("post")
        .sort((a, b) => {
          return a.data.order - b.data.order;
        })
        // Optional limit, remove if unwanted
        .slice(0, 100)
    );
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});