import ava from 'ava';
import prequire from 'proxyquire';

const { css } = prequire.noCallThru()('./part', {
  '../../constants': { APP_DIRNAME: 'root' },
  path: { join: (...args: string[]) => ([...args]) },
});

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            [
              'root',
              'node_modules',
              'style-loader',
            ],
            [
              'root',
              'node_modules',
              'css-loader',
            ],
          ],
        },
      ],
    },
  };

  const result = css();

  t.deepEqual(result, expected);
});
