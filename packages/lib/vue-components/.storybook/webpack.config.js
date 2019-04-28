const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const vueConfig = require("@vue/cli-service/webpack.config.js");
const { sass } = require('@pyxis/webpack/build/parts/sass');
const merge = require('webpack-merge');

const { assign } = Object;

module.exports = async ({ config: storybookConfig }) => {

  const config = assign({}, storybookConfig);

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');

  const tsLoader = vueConfig.module.rules.find((rule) => String(rule.test) === "/\\.ts$/");
  const tsxLoader = vueConfig.module.rules.find((rule) => String(rule.test) === "/\\.tsx$/");

  config.module.rules.push(tsLoader);
  config.module.rules.push(tsxLoader);

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  // Single file component <docs></docs> tag for documentation https://github.com/tuchk4/storybook-readme
  config.module.rules.push({
    resourceQuery: /blockType=docs/,
    use: ['storybook-readme/vue/docs-loader', 'html-loader', 'markdown-loader'],
  });

  return merge(config, sass());;
};