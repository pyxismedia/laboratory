const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const externals = require('webpack-node-externals');

module.exports = typescriptCss({
  entry: {
    'construction': './src/components/construction',
    'logo': './src/components/logo',
  },
  externals: [externals()],
});
