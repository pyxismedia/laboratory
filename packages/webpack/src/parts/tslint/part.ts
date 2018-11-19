export type enforce = 'pre' | 'post' | undefined;

export const tslint = () => ({
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre' as enforce,
        loader: 'tslint-loader',
      }
    ],
  },
});
