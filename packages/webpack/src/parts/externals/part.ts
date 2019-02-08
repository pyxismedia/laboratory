import external from 'webpack-node-externals';
import { ExternalsPart } from './types';

export const externals = (): ExternalsPart => ({
  externals: [external()],
});
