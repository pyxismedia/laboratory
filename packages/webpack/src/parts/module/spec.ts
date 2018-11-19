import ava from 'ava';
import { module } from './part';

ava('should have entry with default value', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.m?jsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
            'eslint-loader',
          ],
        },
      ],
    },
  };

  const result = module();

  t.deepEqual(result, expected);
});
