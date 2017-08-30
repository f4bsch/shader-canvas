const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "shader-canvas.js",
    path: path.resolve(__dirname, "build"),
    library: "ShaderCanvas",
  },
};
