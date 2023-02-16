import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "errorMonitor",
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    babel({ babelHelpers: "bundled" }), // babel配置，编译成es5
  ],
};
