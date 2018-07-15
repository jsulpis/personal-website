const path = require("path");
const webpack = require("webpack");

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "personnal-website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "My personnal website built with Nuxt.js and other awesome tools"
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
      }
    ]
  },
  /*
  * Include custom Javascript files
  */
  plugins: [
    { src: "~/plugins/index.js", ssr: false }
  ],
  /*
  ** Include Sass files
  */
  css: ["~assets/scss/index.scss"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    vendor: ["jquery"],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }

      // Include node_modules in css path
      // const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      // vueLoader.options.loaders.scss = 'vue-style-loader!css-loader!sass-loader?' + JSON.stringify({ includePaths: [path.resolve(__dirname), 'node_modules'] })
      for (const rule of config.module.rules) {
        if (rule.use) {
          for (const use of rule.use) {
            if (use.loader === "sass-loader") {
              use.options = use.options || {};
              use.options.includePaths = ["node_modules"];
            }
          }
        }
      }
    },
    // Turn off warnings
    postcss: {
      plugins: {
        "postcss-custom-properties": {
          warnings: false
        }
      }
    }
  }
};
