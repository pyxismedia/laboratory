import { Configuration } from 'webpack';

export enum Target {
  WEB = 'web',
  WEBWORKER = 'webworker',
  ASYNC_NODE = 'async-node',
  NODE = 'node',
  ELECTRON_MAIN = 'electron-main',
  ELECTRON_RENDERER = 'electron-renderer',
  NODE_WEBKIT = 'node-webkit',
}

export interface TargetArgs {
  target?: Configuration['target'] | Target;
}

export interface TargetPart extends TargetArgs {}
