const path = require("path");
const { typescriptCss } = require('@pyxis/webpack/build/configs/typescriptCss');
const webpackMerge = require('webpack-merge');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  const config = webpackMerge.smartStrategy({
    entry: 'replace',
    output: 'replace',
    plugins: 'replace',
  })(typescriptCss({}), defaultConfig);

  return config;
};
