import ava from 'ava';
import prequire from 'proxyquire';

const { image } = prequire.noCallThru()('./part', {
  '../../constants': { PACKAGE_DIRNAME: 'root' },
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
              'file-loader',
            ],
            options: {
              limit: 25000,
            },
          },
        }
      ]
    }
  };

  const result = image();

  t.deepEqual(result, expected);
});
