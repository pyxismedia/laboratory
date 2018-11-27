import ava from 'ava';
import prequire from 'proxyquire';

const { output } = prequire('./part', {
  'path': { join: (...args) => ([...args]) },
  'pkg-dir': { sync: (dirname) => 'root' },
});

ava('should have output with default value', (t) => {
  const expected = {
    output: {
      filename: '[name].js',
      path: [
        'root',
        './build',
      ],
      library: 'library',
      libraryTarget: 'umd',
    },
  };

  const result = output();

  t.deepEqual(result, expected);
});

ava('should have output with custom value', (t) => {
  const expected = {
    output: {
      filename: '[custom].js',
      path: 'custom/path',
      library: 'customLibrary',
      libraryTarget: 'whatever',
    },
  };

  const result = output(expected.output);

  t.deepEqual(result, expected);
});