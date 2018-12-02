const merge = require('webpack-merge');
const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const { decorate } = require('@pyxis/webpack/build/parts/decorate');

module.exports = {
  webpackConfig: merge(
    typescriptCss({
      target: 'web',
      mode: 'development',
      extensions: ['.ts', '.tsx'],
    }),
    decorate({
      test: /.*\.ds\.tsx?$/,
      loader: 'higher',
      options: {
        package: '@pyxis/theme-pyxis/build',
        decorator: {
          source: '@pyxis/decorators',
          imports: 'decorator',
        },
        sourceDir: 'src',
      },
    }),
  ),
  components: ['src/components/**/index.ts', 'src/components/**/*.ds.tsx'],
  serverPort: process.env.PORT || 6060,
};
