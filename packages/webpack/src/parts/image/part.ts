import { join } from 'path';
import { ModulePart } from '../../types';
import { PACKAGE_DIRNAME } from '../../constants';

export const image = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: join(PACKAGE_DIRNAME, 'node_modules', 'url-loader'),
          options: {
            limit: 500000,
          },
        },
      }
    ]
  }
});
