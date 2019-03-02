import { resolve } from '../../constants';
// @ts-ignore
import postCssPresetEnv from 'postcss-preset-env';

export const postcss = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          resolve('style-loader'),
          { loader: resolve('css-loader'), options: { importLoaders: 1 } },
          { loader: resolve('postcss-loader'), options: {
            ident: 'postcss',
            plugins: () => [
              postCssPresetEnv(),
            ],
          } },
        ]
      }
    ]
  }
});
