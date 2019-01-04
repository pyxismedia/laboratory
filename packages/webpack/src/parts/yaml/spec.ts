import ava from 'ava';
import prequire from 'proxyquire';

const { yaml } = prequire('./part', {
  '../../constants': { APP_DIRNAME: 'root' },
  path: { join: (...args: string[]) => ([...args])},
});

ava('should export default configuration', (t) => {
  const expected = {
    module: {
      rules: [
        {
          test: /\.yaml$/,
          loader: [
            'root',
            'node_modules',
            'yaml-loader',
          ],
        },
      ],
    },
  };

  const result = yaml();

  t.deepEqual(expected, result);
});