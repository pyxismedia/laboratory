import ava from 'ava';
import prequire from 'proxyquire';

class CleanWebpackPlugin {
  constructor(
    public paths: string[][] | string[]
  ) {}
}

const { clean } = prequire('./part', {
  'clean-webpack-plugin': CleanWebpackPlugin,
  '../../constants': { APP_DIRNAME: 'APP_DIRNAME' },
  path: { join: (...args: string[]) => ([...args]) }
});

ava('should call CleanWebpackPlugin with default parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin([['APP_DIRNAME', './build']]),
    ],
  };

  const result = clean({});

  t.deepEqual(result, expected);
});

ava('should call CleanWebpackPlugin with custom parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin([['APP_DIRNAME', 'custom1'], ['APP_DIRNAME', 'custom2']]),
    ],
  };

  const result = clean({ paths: ['custom1', 'custom2'] });

  t.deepEqual(result, expected);
});
