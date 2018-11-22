import external from 'webpack-node-externals';
import { ExternalsElement } from 'webpack';

export interface IExternals {
  externals: ExternalsElement[]
}

export const externals = (): IExternals => ({
  externals: [external()],
});
