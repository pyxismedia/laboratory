import { resolve } from '../../constants';
import path from 'path';

export const sass = () => ({
  module: {
    rules: [
      {
        test: /\.?module.scss$/,
        use: [
          {
            loader: resolve('style-loader'), // creates style nodes from JS strings
            options: {
              sourceMap: true,
            },
          },
          {
            loader: resolve('css-loader'),
            options: {
              modules: true,
              sourceMap: true,
              localIdentName: '[path][name]__[local]__[hash:base64:5]',
              minimize: true
            },
          },
          {
            loader: resolve('resolve-url-loader'),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: resolve('sass-loader'), // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: resolve('style-loader'), // creates style nodes from JS strings
            options: {
              sourceMap: true,
            },
          },
          {
            loader: resolve('css-loader'),
            options: {
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: resolve('resolve-url-loader'),
            options: {
              sourceMap: true,
            },
          },
          {
            loader: resolve('sass-loader'), // compiles Sass to CSS, using Node Sass by default
            options: {
              sourceMap: true,
            },
          },
        ],
        exclude: /\.?module.scss$/,
      },
    ],
  },
});
