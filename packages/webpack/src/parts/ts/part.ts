import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';
import root from 'app-root-path';
import fs from 'fs';

export type enforce = 'pre' | 'post' | undefined;

export const ts = () => ({
  module: {
    rules: [
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre' as enforce,
        loader: resolve(root.path, 'node_modules', 'tslint-loader'),
        options: {
          configFile: resolve(root.path, 'tslint.json'),
        }
      },
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        loader: resolve(root.path, 'node_modules', 'babel-loader'),
        options: require('../../../.babelrc.js'),
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(root.path, 'tsconfig.json'),
    }),
  ],
});
