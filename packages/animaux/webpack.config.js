const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const merge = require('webpack-merge');
const externals = require('webpack-node-externals');

module.exports = merge(
  typescriptCss({
    mode: 'development',
    entry: './src/index.tsx',
    externals: [externals()],
  }),
);