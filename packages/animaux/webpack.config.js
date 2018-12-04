const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');

module.exports = typescriptCss({
  mode: 'development',
  entry: './src/index.tsx',
});