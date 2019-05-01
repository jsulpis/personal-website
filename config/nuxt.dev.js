const merge = require("webpack-merge");
const common = require("./nuxt.common.js");

module.exports = merge(common, {
  env: {
    API_URL: process.env.DEV_API_URL,
    DISQUS_URL: process.env.DEV_DISQUS_URL
  },
  head: {
    meta: [{ name: "robots", content: "noindex, nofollow" }]
  }
});
