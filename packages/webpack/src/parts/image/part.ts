import { ModulePart } from '../../types';
import { resolve } from '../../constants';

export const image = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: resolve('url-loader'),
          options: {
            limit: 500000,
          },
        },
      }
    ]
  }
});
