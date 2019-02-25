const { stylable } = require('@pyxis/webpack/build/configs/stylable');
const externals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge(stylable({
  entry: {
    'construction': './src/components/templates/construction',
    'logo': './src/components/atoms/svg',
  },
  externals: [externals()],
}));
