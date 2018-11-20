import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export type enforce = 'pre' | 'post' | undefined;

export const tslint = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre' as enforce,
        loader: 'tslint-loader',
      }
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
  ],
});
