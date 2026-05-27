module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("art");
  eleventyConfig.addPassthroughCopy("content/writings/**/*.png");
  eleventyConfig.addPassthroughCopy("content/writings/**/*.jpg");
  eleventyConfig.addPassthroughCopy("content/writings/**/*.jpeg");
  eleventyConfig.ignores.add("index.html");
  eleventyConfig.ignores.add("pages/");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};