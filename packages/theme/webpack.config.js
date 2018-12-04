const { typescript } = require('@pyxis/webpack/build/configs/typescript');

module.exports = typescript({
  entry: {
    'components/logo': './src/designers/logo',
  },
});
