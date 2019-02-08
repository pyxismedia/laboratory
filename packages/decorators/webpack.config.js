const { typescript } = require('@pyxis/webpack/build/configs/typescript');
const externals = require('webpack-node-externals');

module.exports = typescript({
  target: 'web',
  externals: [externals()],
});
