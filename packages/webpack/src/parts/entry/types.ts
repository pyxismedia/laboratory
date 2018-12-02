import { EntryFunc, Entry as EntryType } from 'webpack';

export enum Entry {
  INDEX_JS = './src/index.js',
  INDEX_TS = './src/index.ts',
}

export interface EntryArgs {
  entry?: string | string[] | EntryType | EntryFunc | undefined | Entry;
}

export interface EntryPart extends EntryArgs {}
