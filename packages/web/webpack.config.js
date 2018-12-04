const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const { decorate } = require('@pyxis/webpack/build/parts/decorate');
const merge = require('webpack-merge');

module.exports = merge(
  typescriptCss({
    entry: './src/index.tsx',
    mode: 'development',
  }),
  decorate({
    test: /designable.yaml?$/,
    loader: 'build/higher',
    options: {
      component: {
        group: '@pyxis',
        theme: 'components',
        path: 'build',
      },
      data: {
        group: '@pyxis',
        theme: 'theme-pyxis',
        path: 'build/designers'
      },
      decorator: {
        path: '@pyxis/decorators',
        destructor: 'design',
      },
    },
  }),
);
