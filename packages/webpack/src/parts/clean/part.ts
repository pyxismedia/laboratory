import CleanWebpackPlugin from 'clean-webpack-plugin';
import { CleanArgs, CleanPart, Clean } from './types';

export const clean = ({ paths = [Clean.BUILD] }: CleanArgs): CleanPart  => ({
  plugins: [
    new CleanWebpackPlugin(paths),
  ],
});
