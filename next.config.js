const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
})
module.exports = withMDX({
    pageExtensions: ["js", "jsx", "md", "mdx"],
})
const withTM = require("next-transpile-modules")(["gsap"])
module.exports = withTM({})
