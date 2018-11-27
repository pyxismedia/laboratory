import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { join } from 'path';
// This is not possible to share like tslint.json from main directory
// because .babelrc has to be in json for ava which is part of @pyxis/webpack
// as testing tool
import { babelrc } from './babelrc';
import pkgDir from 'pkg-dir';

export type enforce = 'pre' | 'post' | undefined;

// Determine path to package root!
const PACKAGE_DIRNAME = pkgDir.sync(__dirname) || __dirname;

export const ts = () => ({
  module: {
    rules: [
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre' as enforce,
        loader: join(PACKAGE_DIRNAME, 'node_modules', 'tslint-loader'),
        options: {
          configFile: join(PACKAGE_DIRNAME, 'tslint.json'),
        },
      },
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        loader: join(PACKAGE_DIRNAME, 'node_modules', 'babel-loader'),
        options: babelrc,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: join(PACKAGE_DIRNAME, 'tsconfig.json'),
    }),
  ],
});
