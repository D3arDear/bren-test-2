const path = require("path");
// 由于需要绝对路径所以用这个 path
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: {
    bui: "./lib/index.tsx"
  },
  output: {
    // 输出到哪
    path: path.resolve(__dirname, "dist/lib"),
    library: "BUI",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "BUI",
      template: "index.html"
    })
  ]
};
