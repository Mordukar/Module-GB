const { resolve } = require("path"); // 1
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 1
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 1
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),
    new MiniCssExtractPlugin({
      // 2
      filename: "[name].css", // 3
    }),
  ],
  module: {
    rules: [
      { test: /\\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "./src/audio/",
          publicPath: "./src/audio/",
        },
      },
      {
        test: /\\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, // 4
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};