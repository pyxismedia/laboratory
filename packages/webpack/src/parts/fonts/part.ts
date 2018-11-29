// Determine path to package root!
import { join } from 'path';
import { PACKAGE_DIRNAME } from "../../constants";

export const fonts = () => ({
  module: {
    rules: {
      test: /\.font\.js/,
      use: [
        join(PACKAGE_DIRNAME, 'node_modules', 'css-loader'),
        join(PACKAGE_DIRNAME, 'node_modules', 'webfonts-loader')
      ],
    },
  },
});
