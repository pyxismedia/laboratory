import ava from 'ava';
import prequire from 'proxyquire';

const { fonts } = prequire.noCallThru()('./part', {
  '../../constants': { resolve: (modules: string) => modules },
});

ava('should have target with default value', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.font\.js/,
          use: ['css-loader', 'webfonts-loader'],
        }
      ],
    },
  };

  const result = fonts();

  t.deepEqual(result, expected);
});
