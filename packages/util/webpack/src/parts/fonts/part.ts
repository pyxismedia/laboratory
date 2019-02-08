import { resolve } from '../../constants';
import { FontsPart } from './types';

export const fonts = (): FontsPart => ({
  module: {
    rules: {
      test: /\.font\.js/,
      use: [
        resolve('css-loader'),
        resolve('webfonts-loader')
      ],
    },
  },
});
