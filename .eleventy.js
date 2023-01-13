const esbuild = require("esbuild");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { getOrderedPosts, getPostDate } = require("./utils");

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

  eleventyConfig.on("eleventy.before", async () => {
    await esbuild.build({
      entryPoints: ["src/js/index.js"],
      bundle: true,
      sourcemap: true,
      outfile: "public/js/bundle.js",
      target: ["es6"]
    })
  })

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});