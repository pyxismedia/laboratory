import CleanWebpackPlugin from 'clean-webpack-plugin';
import { CleanArgs, CleanPart, Clean } from './types';
import { APP_DIRNAME } from '../../constants';
import { join } from 'path';

export const clean = ({ paths = [Clean.BUILD] }: CleanArgs): CleanPart  => ({
  plugins: [
      new CleanWebpackPlugin(paths.map(path => join(APP_DIRNAME, path)))
  ],
});
