import { join } from 'path';
import { ModulePart } from '../../types';
import { PACKAGE_DIRNAME } from '../../constants';

export const image = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: join(PACKAGE_DIRNAME, 'node_modules', 'file-loader'),
          options: {
            limit: 25000,
          },
        },
      }
    ]
  }
});
