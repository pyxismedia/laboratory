import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// @ts-ignore
import PrepackWebpackPlugin from 'prepack-webpack-plugin';
// import DtsBundler from 'declaration-bundler-webpack-plugin';
import path from 'path';
// This is not possible to share like tslint.json from main directory
// because .babelrc has to be in json for ava which is part of @pyxis/webpack
// as testing tool
import { babelrc } from './babelrc';
import { resolve } from '../../constants';
import { TsPart } from './types';
import { Enforce } from '../../types';

export type enforce = 'pre' | 'post' | undefined;

export const ts = (): TsPart => ({
  module: {
    rules: [
      // TODO: Add after installation of source-map-loader
      // {
      //   test: /\.js$/,
      //   loader: resolve('source-map-loader'),
      //   include: /node_modules/,
      //   enforce: Enforce.PRE
      // },
      {
        test: /.*\.m?tsx?$/,
        exclude: /node_modules/,
        enforce: Enforce.PRE,
        loader: resolve('tslint-loader'),
        options: {
          configFile: resolve('@pyxis/webpack/tslint.json'),
        },
      },
      {
        test: /.*\.m?tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: resolve('babel-loader'),
            options: babelrc,
          },
          resolve('react-docgen-typescript-loader'),
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
    }),
    new PrepackWebpackPlugin({
      test: /\.tsx?($|\?)/i,
      options: {
        sourceMap: true,
      },
    })
  ],
});
