const { DateTime } = require("luxon");
const esbuild = require("esbuild");

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
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
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

module.exports = { getOrderedPosts, getPostDate, buildJS };
