import { resolve } from '../../constants';
import { SVGPart } from './types';

export const svg = (): SVGPart => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [resolve('svg-react-loader')],
      },
    ],
  },
});
