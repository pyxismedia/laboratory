import { LoaderOptionsPlugin } from 'webpack';

export interface DecorateArgs {
  test: RegExp;
  loader: string;
  options: LoaderOptionsPlugin
}

export interface DecoratePart {
  module: {
    rules: [
      {
        test: DecorateArgs['test'],
        loaders: [
          {
            options: Object, // TODO According @pyxis/loaders
            loader: DecorateArgs['loader'],
          }
        ],
      }
    ],
  };
}
