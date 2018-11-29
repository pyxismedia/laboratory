const { typescriptCss } = require('@pyxis/webpack');

module.exports = {
  webpackConfig: typescriptCss({ target: 'web', mode: 'development', extensions: ['.ts', '.tsx'] }),
  components: 'src/components/**/index.ts',
  serverPort: process.env.PORT || 6060,
};
