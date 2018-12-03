const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');

module.exports = typescriptCss({
  entry: {
    'construction': './src/components/construction',
  },
});
