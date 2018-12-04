import { ModulePart } from '../../types'
import { PACKAGE_DIRNAME } from '../../constants';
import { join } from 'path';

export const yaml = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.yaml$/,
        loader: join(PACKAGE_DIRNAME, 'node_modules', 'yaml-loader'),
      },
    ],
  },
});