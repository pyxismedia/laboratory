const { typescript } = require('@pyxis/webpack/build/configs/typescript');

module.exports = typescript({
  target: 'node',
  entry: {
    higher: './src/higher/loader/index.ts',
  },
});
