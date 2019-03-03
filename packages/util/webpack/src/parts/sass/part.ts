import { resolve } from '../../constants';

export const sass = () => ({
  module: {
    rules: [
      {
        test: /\.?module.scss$/,
        use: [
          resolve('style-loader'), // creates style nodes from JS strings
          {
            loader: resolve('css-loader'),
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[local]__[hash:base64:5]',
              minimize: true,
            }
          },
          resolve('sass-loader'), // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.scss$/,
        use: [
          resolve('style-loader'), // creates style nodes from JS strings
          resolve('css-loader'),
          resolve('sass-loader'), // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /\.?module.scss$/,
      },
    ],
  },
});
