import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from '../../constants';

export const typescript = () => ({
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: resolve('ts-loader'),
        options: {
          transpileOnly: true
        },
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // Indicates path to tsconfig.json file in particular package
      tsconfig: './tsconfig.json',
    }),
  ],
});