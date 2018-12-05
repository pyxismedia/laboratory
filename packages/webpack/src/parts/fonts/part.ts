// Determine path to package root!
import { join } from 'path';
import { APP_DIRNAME } from '../../constants';
import { FontsPart } from './types';

export const fonts = (): FontsPart => ({
  module: {
    rules: {
      test: /\.font\.js/,
      use: [
        join(APP_DIRNAME, 'node_modules', 'css-loader'),
        join(APP_DIRNAME, 'node_modules', 'webfonts-loader')
      ],
    },
  },
});
