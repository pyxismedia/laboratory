import ava from 'ava';
import prequire from 'proxyquire';

const { output } = prequire.noCallThru()('./part', {
  'path': { join: (...args: string[]) => ([...args]) },
  '../../constants': { APP_DIRNAME: 'root' },
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

  const result = output({});

  t.deepEqual(result, expected);
});

ava('should have output with custom value', (t) => {
  const expected = {
    output: {
      filename: 'custom.js',
      path: ['root', 'custom'],
      library: 'customLibrary',
      libraryTarget: 'whatever',
    },
  };

  const result = output({
    filename: 'custom.js',
    path: 'custom',
    library: 'customLibrary',
    libraryTarget: 'whatever',
  });

  t.deepEqual(result, expected);
});
