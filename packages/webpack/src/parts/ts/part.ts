import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
// import DtsBundler from 'declaration-bundler-webpack-plugin';
import { join } from 'path';
// This is not possible to share like tslint.json from main directory
// because .babelrc has to be in json for ava which is part of @pyxis/webpack
// as testing tool
import { babelrc } from './babelrc';
import { PACKAGE_DIRNAME } from '../../constants';
import { TsPart } from './types';
import { Enforce } from '../../types';

export type enforce = 'pre' | 'post' | undefined;

export const ts = (): TsPart => ({
  module: {
    rules: [
      {
        test: /.*\.m?tsx?$/,
        exclude: /node_modules/,
        enforce: Enforce.PRE,
        loader: join(PACKAGE_DIRNAME, 'node_modules', 'tslint-loader'),
        options: {
          configFile: join(PACKAGE_DIRNAME, 'tslint.json'),
        },
      },
      {
        test: /.*\.m?tsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: join(PACKAGE_DIRNAME, 'node_modules', 'babel-loader'),
          options: babelrc,
        },
          // {
          // // To emit declarations *.d.ts files only!
          // loader: join(PACKAGE_DIRNAME, 'node_modules', 'ts-loader'),
          // options: {
          //   compilerOptions: {
          //     emitDeclarationOnly: true,
          //     noEmit: false,
          //     // allowJs: false,
          //     // outDir: './build',
          //     // declaration: true,
          //     // declarationDir: './build'
          //   },
          // },
        // }
        ],
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: join(PACKAGE_DIRNAME, 'tsconfig.json'),
    }),
    // new DtsBundler({
    //   moduleName:'pyxis',
    //   out: 'main.d.ts',
    // }),
  ],
});
