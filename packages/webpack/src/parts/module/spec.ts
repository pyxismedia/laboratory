import ava from 'ava';
import { module } from './part';

ava('should have entry with default value', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.m?tsx?$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
      ],
    },
  };

  const result = module();

  t.deepEqual(result, expected);
});
