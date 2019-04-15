import ava from 'ava';
import prequire from 'proxyquire';

class CleanWebpackPlugin {
  constructor() {}
}

const { clean } = prequire('./part', {
  'clean-webpack-plugin': CleanWebpackPlugin,
  '../../constants': { APP_DIRNAME: 'APP_DIRNAME' },
  path: { join: (...args: string[]) => ([...args]) }
});

ava('should call CleanWebpackPlugin with default parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin(),
    ],
  };

  const result = clean({});

  t.deepEqual(result, expected);
});

ava('should call CleanWebpackPlugin with custom parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin(),
    ],
  };

  const result = clean({ paths: ['custom1', 'custom2'] });

  t.deepEqual(result, expected);
});
