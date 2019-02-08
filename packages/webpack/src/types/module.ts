import { Module } from 'webpack';

export interface ModulePart {
  module: Module;
}

export enum Enforce {
  PRE = 'pre',
  POST = 'post',
}
