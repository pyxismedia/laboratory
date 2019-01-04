import ava from 'ava';
import prequire from 'proxyquire';

const { image } = prequire.noCallThru()('./part', {
  '../../constants': { resolve: (modules: string) => modules },
});

ava('should return default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.(jpg|png)$/,
          use: {
            loader: 'url-loader',
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
