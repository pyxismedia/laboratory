import ava from 'ava';
import prequire from 'proxyquire';

const { image } = prequire.noCallThru()('./part', {
  '../../constants': { APP_DIRNAME: 'root' },
  path: { join: (...args: string[]) => ([...args]) },
});

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: [
              'root',
              'node_modules',
              'url-loader',
            ],
            options: {
              limit: 500000,
            },
          },
        }
      ]
    }
  };

  const result = image();

  t.deepEqual(result, expected);
});
