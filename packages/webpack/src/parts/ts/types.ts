import { Plugin, Module } from 'webpack';

export interface TsPart {
  module?: Module,
  plugins?: Plugin[] | undefined,
}
