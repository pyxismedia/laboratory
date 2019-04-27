// .storybook/webpack.config.js
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const vueConfig = require("@vue/cli-service/webpack.config.js");

module.exports = async ({ config: defaultConfig }) => {
  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');

  const tsLoader = vueConfig.module.rules.find((rule) => String(rule.test) === "/\\.ts$/");
  const tsxLoader = vueConfig.module.rules.find((rule) => String(rule.test) === "/\\.tsx$/");

  console.dir(tsxLoader, { depth: null });

  defaultConfig.module.rules.push(tsLoader);
  defaultConfig.module.rules.push(tsxLoader);

  defaultConfig.plugins.push(new ForkTsCheckerWebpackPlugin());

  // console.dir(vueConfig, { depth: null });

  return defaultConfig;
};