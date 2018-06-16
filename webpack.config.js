var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    path: path.resolve("./dist/"),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/particles.js/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: "env"
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              includePaths: ["./node_modules"]
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|webp|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "./src",
              publicPath: "../"
            }
          }
        ]
      },
      {
        test: /\.(json)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "./assets",
              publicPath: "../"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      filename: "css/[name].bundle.css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      chunks: ["index"]
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 9999
    })
  ]
};
