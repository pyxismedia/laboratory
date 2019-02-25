import ava from 'ava';
import prequire from 'proxyquire';

const { svg } = prequire.noCallThru()('./part', {
  '../../constants': { resolve: (modules: string) => modules },
});

ava('should have target with default value', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: ['svg-inline-loader'],
        },
      ],
    },
  };

  const result = svg();

  t.deepEqual(result, expected);
});
