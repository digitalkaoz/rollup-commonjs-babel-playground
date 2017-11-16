import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
    input: "index.js",
    plugins: [
        resolve({
            jsnext: true,
        }),
        babel({
            extends: __dirname+"/.babelrc.js",
            externalHelpers: true
        }),
        commonjs({
        }),
    ],
    output: {
        file: "output.js",
        format: "iife",
        name: "example",
        sourcemap: false,
        external: [
            "@babel/runtime/helpers/extends"
        ],
        globals: {
            "@babel/runtime/helpers/extends": "o_global.extend"
        }
    }
};
