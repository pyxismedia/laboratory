import { Enforce } from '../../types';
import { BABELRC } from './babelrc/types';
import { Plugin, Module } from 'webpack';

export interface TsPart {
  module?: Module,
  //   {
  //   rules: [
  //     {
  //       test: RegExp,
  //       exclude: RegExp,
  //       enforce: Enforce.PRE,
  //       loader: string,
  //       options: {
  //         configFile: string,
  //       },
  //     },
  //     {
  //       test: RegExp,
  //       exclude: RegExp,
  //       loader: string,
  //       options: BABELRC,
  //     }
  //   ],
  // },
  plugins?: Plugin[] | undefined,
}
