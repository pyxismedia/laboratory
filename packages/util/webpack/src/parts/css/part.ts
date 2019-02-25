import { ModulePart } from '../../types'
import { resolve } from '../../constants';

export const css = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          resolve('style-loader'),
          resolve('css-loader'),
        ],
      },
    ]
  }
});
