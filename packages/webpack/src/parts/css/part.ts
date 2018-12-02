import { ModulePart } from '../../types'

export const css = (): ModulePart => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
});
