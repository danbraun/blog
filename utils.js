const { DateTime } = require("luxon");
const esbuild = require("esbuild");
const eleventyFetch = require("@11ty/eleventy-fetch");

const getOrderedPosts = (collection) => {
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
}

const getPostDate = (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
}

const buildJS = async () => {
    await esbuild.build({
        entryPoints: ["src/js/index.js"],
        bundle: true,
        sourcemap: true,
        outfile: "public/js/bundle.js",
        target: ["es6"]
    })
}

const blogImage = async (params) => {
    const source_low = `https://res.cloudinary.com/brauntrutta/image/upload/t_blog-low/f_auto/blog/${params.filename}`;
    const source_med = `https://res.cloudinary.com/brauntrutta/image/upload/t_blog-med/f_auto/blog/${params.filename}`;
    const source_high = `https://res.cloudinary.com/brauntrutta/image/upload/t_blog-high/f_auto/blog/${params.filename}`;
    const infoURL = `https://res.cloudinary.com/brauntrutta/image/upload/t_getimageinfo/blog/${params.filename}`;
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

module.exports = { getOrderedPosts, getPostDate, buildJS, blogImage };
