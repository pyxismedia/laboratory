import { resolve } from '../../constants';

export const sass = () => ({
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        resolve('style-loader'), // creates style nodes from JS strings
        resolve('css-loader'), // translates CSS into CommonJS
        resolve('sass-loader'), // compiles Sass to CSS, using Node Sass by default
      ],
    }],
  },
});
