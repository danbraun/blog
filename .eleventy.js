module.exports = (function (eleventyConfig) {
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
        .slice(0, 3)
    );
  });
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
});