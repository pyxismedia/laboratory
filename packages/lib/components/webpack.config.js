const { config } = require('@pyxis/webpack/build/configs/typescript/stylable');
const externals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge(config({
  entry: {
    'construction': './src/components/templates/construction',
    'logo': './src/components/atoms/svg',
  },
  externals: [externals()],
}));
