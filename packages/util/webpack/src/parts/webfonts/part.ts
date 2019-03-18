import { resolve } from '../../constants';

export const webfonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: resolve('file-loader'),
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      }
    ],  
  },
});