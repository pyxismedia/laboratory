import { join } from 'path';
import { ModulePart } from '../../types';
import { APP_DIRNAME } from '../../constants';

export const image = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: join(APP_DIRNAME, 'node_modules', 'url-loader'),
          options: {
            limit: 500000,
          },
        },
      }
    ]
  }
});
