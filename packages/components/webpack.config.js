const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const externals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge(typescriptCss({
  entry: {
    'construction': './src/components/construction',
    'logo': './src/components/logo',
  },
  externals: [externals()],
}));
