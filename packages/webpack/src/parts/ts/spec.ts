import ava from 'ava';
import prequire from 'proxyquire';
import { enforce } from './part';

class ForkTsCheckerWebpackPlugin {
  tsconfig: string;
  constructor({ tsconfig }: { tsconfig: string }) {
    this.tsconfig = tsconfig;
  }
}

const { ts } = prequire.noCallThru()('./part', {
  'fork-ts-checker-webpack-plugin': ForkTsCheckerWebpackPlugin,
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
          loader: 'babel-loader',
          options: 'babelrc',
        },
      ],
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        tsconfig: 'root',
      }),
    ],
  };

  const result = ts();

  t.deepEqual(expected, result);
});
