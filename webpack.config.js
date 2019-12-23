const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    bui: "./lib/index.tsx"
  },
  output: {
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
  }
};
