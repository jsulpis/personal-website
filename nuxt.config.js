const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

let modules = ["@nuxtjs/dotenv"];
if (process.env.CONTEXT === "production") {
  modules.push(["@nuxtjs/google-analytics", { id: "UA-124217907-2" }]);
}

module.exports = {
  // Headers of the page
  head: {
    htmlAttrs: { prefix: "og: http://ogp.me/ns#" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "site_name", property: "og:site_name", content: "Julien Sulpis" },
      { name: "locale", property: "og:locale", content: "fr_FR" },
      { name: "type", property: "og:type", content: "website" },
      {
        name: "google-site-verification",
        content: "flYBOh35oN6AkHLEDfD-fCx0VKRSWEi1F37r4fwrjoo"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.2.0/css/all.css",
        integrity:
          "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ",
        crossorigin: "anonymous"
      }
    ]
  },
  // Generate proper fallback pages
  generate: { fallback: true },
  // Modules specified above
  modules: modules,
  plugins: ["~/plugins/vuetify.js", "~/plugins/filters.js"],
  // Include Vuetify style
  css: ["~/assets/vuetify-style/app.styl"],
  // Disable the default progress bar
  loading: false,

  // Build configuration
  build: {
    transpile: [/^vuetify/],
    plugins: [
      new webpack.ProvidePlugin({ $: "jquery" }),
      new VuetifyLoaderPlugin()
    ],
    extractCSS: true,
    cssSourceMap: false,
    // Run ESLint on save
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ];
      }

      config.node = {
        fs: "empty"
      };
    }
  }
};
