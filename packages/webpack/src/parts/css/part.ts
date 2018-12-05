import { ModulePart } from '../../types'
import { join } from 'path';
import { APP_DIRNAME } from '../../constants';

export const css = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          join(APP_DIRNAME, 'node_modules', 'style-loader'),
          join(APP_DIRNAME, 'node_modules', 'css-loader'),
        ]
      }
    ]
  }
});
