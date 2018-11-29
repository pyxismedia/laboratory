import ava from 'ava';
import prequire from 'proxyquire';

const { fonts } = prequire.noCallThru()('./part', {
  '../../constants': { PACKAGE_DIRNAME: 'root' },
  'path': { join: (...args: string[]) => ([...args]) },
});

ava('should have target with default value', (t) => {
  const expected = {
    module: {
      rules: {
        test: /\.font\.js/,
        use: [
          ['root', 'node_modules', 'css-loader'],
          ['root', 'node_modules', 'webfonts-loader']
        ],
      },
    },
  };

  const result = fonts();

  t.deepEqual(result, expected);
});
