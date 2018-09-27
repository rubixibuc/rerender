var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "rerender.js",
    library: "rerender",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: [nodeExternals()]
};
