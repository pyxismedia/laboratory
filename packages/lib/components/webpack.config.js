const { typescript } = require('@pyxis/webpack/build/configs/typescript');
const { sass } = require('@pyxis/webpack/build/parts/sass');
const externals = require('webpack-node-externals');
const merge = require('webpack-merge');

module.exports = merge.smart(
  typescript({
    entry: {
      'construction': './src/components/templates/construction',
      'logo': './src/components/atoms/svg',
    },
    externals: [externals()],
  }),
  sass(),
);
