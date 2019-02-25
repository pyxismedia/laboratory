import { ModulePart } from '../../types'
import { resolve } from '../../constants';

export const markdown = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: resolve('html-loader'),
          },
          {
            loader: resolve('markdown-loader'),
          },
        ],
      },
    ],
  },
});
