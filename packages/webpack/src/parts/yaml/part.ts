import { ModulePart } from '../../types'
import { APP_DIRNAME } from '../../constants';
import { join } from 'path';

export const yaml = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.yaml$/,
        loader: join(APP_DIRNAME, 'node_modules', 'yaml-loader'),
      },
    ],
  },
});