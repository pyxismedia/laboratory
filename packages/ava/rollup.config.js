import resolve from "rollup-plugin-node-resolve";
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: './src/typescript/index.js',
  output: [
    {
      file: 'build/typescript/ava.config.js',
      format: 'esm'
    },
  ],
  plugins: [
    resolve({
      preferBuiltins: false,
    }),
    json(),
    commonjs(),
  ],
},{
  input: './src/bin/index.js',
  output: [
    {
      file: 'build/bin/ava.js',
      format: 'cjs'
    },
  ],
  plugins: [
    resolve(),
    json(),
    commonjs(),
  ],
}];