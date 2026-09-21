module.exports = {
  eleventyComputed: {
    permalink: (data) => {
      if (data.draft && process.env.ELEVENTY_ENV === "production") {
        return false;
      }
      return data.permalink;
    },
    eleventyExcludeFromCollections: (data) => {
      if (data.draft && process.env.ELEVENTY_ENV === "production") {
        return true;
      }
      return data.eleventyExcludeFromCollections || false;
    }
  }
};
