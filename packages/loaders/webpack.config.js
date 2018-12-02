const { typescript } = require('@pyxis/webpack/build/configs/typescript');

module.export = typescript({
  entry: {
    higher: 'src/higher',
  },
});
