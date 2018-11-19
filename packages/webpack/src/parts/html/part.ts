import HtmlWebpackPlugin from 'html-webpack-plugin';

export const html = ({ title = 'Webpack demo' } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
    }),
  ],
});
