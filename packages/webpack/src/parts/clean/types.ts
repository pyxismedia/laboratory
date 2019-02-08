import { Plugin } from 'webpack';

export interface CleanPart {
  plugins?: Plugin[] | undefined,
}

export interface CleanArgs {
  paths?: Clean[];
}

export enum Clean {
  BUILD = './build',
  DIST = './dist',
}
