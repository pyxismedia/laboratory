import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HtmlArgs, HtmlPart } from './types';

export const html = ({ title = 'Webpack html plugin' }: HtmlArgs): HtmlPart => ({
  plugins: [
    new HtmlWebpackPlugin({
      title,
    }),
  ],
});
