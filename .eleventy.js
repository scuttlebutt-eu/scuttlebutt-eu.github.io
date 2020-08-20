module.exports = function(eleventy) {
    eleventy.addPassthroughCopy('./assets');
    eleventy.setTemplateFormats([
        "md",
        "njk"
    ]);
  };
