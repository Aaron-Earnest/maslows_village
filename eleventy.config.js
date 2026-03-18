const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(HtmlBasePlugin);
    // Automatically optimizes every <img> and <picture> tag on the site
    eleventyConfig.addPlugin(eleventyImageTransformPlugin);
    // Handles hierarchical menus and breadcrumbs for the pages
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    // Copies these folders exactly as they are to the final 'public' folder
    eleventyConfig.addPassthroughCopy("src/assets/documents"); // Your fillable PDFs
    eleventyConfig.addPassthroughCopy("src/assets/static");    // Favicon, robots.txt
    eleventyConfig.addPassthroughCopy("src/assets/css");

    return {
        // Set teh pathPrefix to my exact repository name
        pathPrefix: "/maslows_village/",
        dir: {
            input: "src",           // Where you work
            output: "public",         // Where the final site is built
            includes: "_includes",   //Reusable bits & layouts
            data: "_data"           // Global site info
        },
        // Industry standart: Use Nunjucks for logic in Markdown files
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};