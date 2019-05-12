import { Options } from 'webpack';

export enum Devtool {
  EVAL = 'eval',
  INLINE_SOURCE_MAP = 'inline-source-map',
  CHEAP_EVAL_SOURCE_MAP = 'cheap-eval-source-map',
  SOURCE_MAP = 'source-map',
}

export interface DevtoolPart {
  devtool: Options.Devtool;
}