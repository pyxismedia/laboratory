import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';
import root from 'app-root-path';
// This is not possible to share like tslint.json from main directory
// because .babelrc has to be in json for ava which is part of @pyxis/webpack
// as testing tool
import { babelrc } from './babelrc';

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
        },
      },
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        loader: resolve(root.path, 'node_modules', 'babel-loader'),
        options: babelrc,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(root.path, 'tsconfig.json'),
    }),
  ],
});
