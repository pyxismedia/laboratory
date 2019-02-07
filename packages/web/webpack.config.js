const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const { decorate } = require('@pyxis/webpack/build/parts/decorate');
const { yaml } = require('@pyxis/webpack/build/parts/yaml');
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
      // Decorating component over data using decorator
      component: {
        group: '@pyxis',
        theme: 'components',
        path: 'build',
      },
      data: {
        group: '',
        theme: '',
        path: '../../../theme/build/designers'
      },
      decorator: {
        path: '../../../decorators/build/design',
        destructor: 'design',
      },
    },
  }),
  // yaml(),
);
