
export const module = () => ({
  module: {
    rules: [
      {
        test: /\.m?tsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
});
