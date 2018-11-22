import ava from 'ava';
import { css } from './part';

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  };

  const result = css();

  t.deepEqual(result, expected);
});
