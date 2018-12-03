import { ModulePart } from '../../types'
import { join } from 'path';
import {PACKAGE_DIRNAME} from "../../constants";

export const css = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          join(PACKAGE_DIRNAME, 'node_modules', 'style-loader'),
          join(PACKAGE_DIRNAME, 'node_modules', 'css-loader'),
        ]
      }
    ]
  }
});
