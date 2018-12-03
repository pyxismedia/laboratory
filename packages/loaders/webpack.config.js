const { typescript } = require('@pyxis/webpack/build/configs/typescript');

module.exports = typescript({
  entry: {
    higher: './src/higher/loader/index.ts',
  },
});
