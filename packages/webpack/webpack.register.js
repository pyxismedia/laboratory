const webpack = require('webpack');

require('@babel/register')({
  extensions: ['.ts'],
});

const { config } = require('./webpack.config');

const compiler = webpack(config);

compiler.run((err, stats) => {
  if (err) {
    return console.error(err);
  }

  if (stats.hasErrors()) {
    return console.error(stats.toString("errors-only"));
  }

  if(stats.hasWarnings()) {
    return console.warn(stats.toString({ colors: true }));
  }

  console.log(stats.toString({ colors: true }));
});
