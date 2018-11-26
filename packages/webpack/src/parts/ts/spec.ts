import ava from 'ava';
import prequire from 'proxyquire';
import { resolve } from 'path';
import root from 'app-root-path';
import { enforce } from './part';

class ForkTsCheckerWebpackPlugin {
  tsconfig: string[];
  constructor({ tsconfig }: { tsconfig: string[] }) {
    this.tsconfig = tsconfig;
  }
}

const { ts } = prequire.noCallThru()('./part', {
  'fork-ts-checker-webpack-plugin': ForkTsCheckerWebpackPlugin,
  // @ts-ignore
  'path': { resolve: (...args) => ([...args]) },
  'app-root-path': { path: 'root' },
  './babelrc': { babelrc: 'babelrc' },
});

ava('should export default values', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.m?tsx?$/,
          exclude: /node_modules/,
          enforce: 'pre' as enforce,
          loader: [
            'root',
            'node_modules',
            'tslint-loader',
          ],
          options: {
            configFile: [
              'root',
              'tslint.json',
            ],
          },
        },
        {
          test: /\.m?tsx?$/,
          exclude: /node_modules/,
          loader: [
            'root',
            'node_modules',
            'babel-loader',
          ],
          options: 'babelrc',
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tsconfig: ['root', 'tsconfig.json'],
      }),
    ],
  };

  const result = ts();

  t.deepEqual(expected, result);
});
