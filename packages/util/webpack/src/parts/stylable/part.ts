// @ts-ignore Missing typings for package
import StylableWebpackPlugin from '@stylable/webpack-plugin';
import { StylablePart } from './types';

export const stylable = (): StylablePart => ({
  plugins: [
    new StylableWebpackPlugin(),
  ],
});
