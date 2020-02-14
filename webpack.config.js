const path = require("path");

module.exports = {
  entry: "./src/it-spa.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  mode: "development"
};
