const merge = require("webpack-merge");
const common = require("./nuxt.common.js");

module.exports = merge(common, {
  env: {
    API_URL: process.env.PROD_API_URL,
    DISQUS_URL: process.env.PROD_DISQUS_URL
  },
  modules: [["@nuxtjs/google-analytics", { id: "UA-124217907-2" }]]
});
