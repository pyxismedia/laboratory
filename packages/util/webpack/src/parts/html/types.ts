import HtmlWebpackPlugin from 'html-webpack-plugin';

export interface HtmlArgs {
  title?: string;
}

export interface HtmlPart {
  plugins: HtmlWebpackPlugin[],
}
