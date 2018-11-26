const { typescriptCss } = require('@pyxis/webpack/typescriptCss.config');

module.exports = {
  webpackConfig: typescriptCss({ target: 'web', mode: 'development' }),
  components: 'src/components/**/*.tsx',
  serverPort: process.env.PORT || 6060,
  serverHost: '0.0.0.0',
};
