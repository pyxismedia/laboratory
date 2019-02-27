import ava from 'ava';
import prequire from 'proxyquire';
import { enforce } from './part';
import { resolve } from '../../constants';
import { babelrc } from './babelrc';

class ForkTsCheckerWebpackPlugin {
  public tsconfig: string;
  constructor({ tsconfig }: { tsconfig: string }) {
    this.tsconfig = tsconfig;
  }
}

class PrepackPlugin {
  public configuration = {
    test: /\.tsx?($|\?)/i,
    prepack: {},
    options: {
      sourceMap: true,
    },
  }
}

const { ts } = prequire.noCallThru()('./part', {
  'fork-ts-checker-webpack-plugin': ForkTsCheckerWebpackPlugin,
  'prepack-webpack-plugin': PrepackPlugin,
  './babelrc': { babelrc: 'babelrc' },
  '../../constants': { resolve: (modules: string) => modules },
  path: { resolve: () => 'root' },
});

ava('should export default values', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /.*\.m?tsx?$/,
          exclude: /node_modules/,
          enforce: 'pre' as enforce,
          loader: 'tslint-loader',
          options: {
            configFile: '@pyxis/webpack/tslint.json',
          },
        },
        {
          test: /.*\.m?tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: 'babelrc',
            },
            'react-docgen-typescript-loader',
          ],
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tsconfig: 'root',
      }),
      new PrepackPlugin(),
    ],
  };

  const result = ts();

  t.deepEqual(expected, result);
});
