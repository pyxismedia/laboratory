import ava from 'ava';
import prequire from 'proxyquire';

const { output } = prequire('./part', { 'app-root-path': { path: 'root/path' } });

ava('should have output with default value', (t) => {
  const expected = {
    output: {
      filename: '[name].js',
      path: 'root/path',
      library: 'library',
      libraryTarget: 'umd',
    },
  };

  const result = output();

  t.deepEqual(result, expected);
});
