import { Output } from 'webpack';

export enum LibraryTarget {
  VAR = 'var',
  ASSIGN = 'assign',
  THIS = 'this',
  WINDOW = 'window',
  GLOBAL = 'global',
  COMMONJS = 'commonjs',
  COMMONJS2 = 'commonjs2',
  AMD = 'amd',
  UMD = 'umd',
  JSONP = 'jsonp',
}

export enum Filename {
  AUTO = '[name].js',
}

export enum Path {
  BUILD = './build',
}

export enum Library {
  LIBRARY = 'library',
}

export interface OutputArgs {
  filename?: Filename;
  path?: Path;
  library?: Library;
  libraryTarget?: LibraryTarget;
}

export interface OutputPart {
  output?: Output | OutputArgs;
}
