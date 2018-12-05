import ava from 'ava';
import prequire from 'proxyquire';
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
  'path': { join: (...args) => ([...args]) },
  './babelrc': { babelrc: 'babelrc' },
  '../../constants': {
    PACKAGE_DIRNAME: 'root',
    APP_DIRNAME: 'root',
  }
});

ava('should export default values', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /.*\.m?tsx?$/,
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
          test: /.*\.m?tsx?$/,
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
