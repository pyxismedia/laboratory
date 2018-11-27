const { typescriptCss } = require('@pyxis/webpack');

module.exports = {
  webpackConfig: typescriptCss({ target: 'web', mode: 'development' }),
  components: 'src/components/**/*.tsx',
  serverPort: process.env.PORT || 6060,
};
