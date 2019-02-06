const { typescript } = require('@pyxis/webpack/build/configs/typescript');

module.exports = typescript({
  entry: {
    'designers/logo': './src/designers/logo',
  },
});
