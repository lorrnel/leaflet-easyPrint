import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { uglify } from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "umd",
    sourceMap: true
  },
  plugins: [
    resolve(),
    babel({ exclude: "node_modules/**" }),
    uglify(),
    commonjs()
  ]
};
