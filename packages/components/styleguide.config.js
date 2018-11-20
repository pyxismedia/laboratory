const { typescript } = require('@pyxis/webpack/typescript.config');

module.exports = {
  webpackConfig: typescript,
  components: 'src/components/**/*.{ts,tsx}'
};
