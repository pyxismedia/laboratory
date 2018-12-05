const merge = require('webpack-merge');
const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');

module.exports = {
  webpackConfig: merge(
    typescriptCss({
      target: 'web',
      mode: 'development',
    }),
  ),
  components: [
    './src/components/**/index.ts',
  ],
  logger: {
    warn: console.warn,
    info: console.log,
    debug: console.log
  },
  serverPort: process.env.PORT || 6060,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,
  verbose: false,
  styles: {
    Playground: {
      preview: {
        position: 'relative'
      },
    }
  },
  pagePerSection: true,
  sections: [
    {
      name: 'Styleguide',
      content: 'docs/Documentation.md',
    },
    {
      name: 'Designable Components',
      content: 'docs/Designable.md',
      sections: [
        {
          name: 'Logo',
          components: () => ['./src/components/Logo/index.ts'],
          exampleMode: 'expand',
          usageMode: 'collapse',
        },
        {
          name: 'Construction',
          components: () => ['./src/components/Construction/index.ts'],
          exampleMode: 'expand',
          usageMode: 'collapse', 
        },
        {
          name: 'Map',
          components: () => ['./src/components/Mapbox/index.ts'],
          exampleMode: 'expand',
          usageMode: 'collapse', 
        },
      ],
      sectionDepth: 0,
    }
  ],
};
