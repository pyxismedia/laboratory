import CleanWebpackPlugin from 'clean-webpack-plugin';
import { ICleanModel } from './types';

export const clean = ({ paths = ['build'] } = {}): ICleanModel  => ({
  plugins: [
    new CleanWebpackPlugin(paths),
  ],
});
