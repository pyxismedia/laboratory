import external from 'webpack-node-externals';
import { ExternalsElement } from 'webpack';

export interface IExternals {
  target: 'web' | 'webworker' | 'async-node' | 'node' | 'electron-main' | 'electron-renderer' | 'node-webkit';
  externals: ExternalsElement[]
}

export const externals = (): IExternals => ({
  target: 'node',
  externals: [external()],
});
