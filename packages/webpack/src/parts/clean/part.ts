import CleanWebpackPlugin from 'clean-webpack-plugin';
import { CleanModel } from './model';

export const clean = ({ paths = ['build'] } = {}): CleanModel  => ({
  plugins: [
    new CleanWebpackPlugin(paths),
  ],
});
