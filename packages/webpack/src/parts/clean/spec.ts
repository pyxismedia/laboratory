import ava from 'ava';
import prequire from 'proxyquire';

class CleanWebpackPlugin {
  constructor(
    public paths: string[]
  ) {}
}

const { clean } = prequire('./part', { 'clean-webpack-plugin': CleanWebpackPlugin });

ava('should call CleanWebpackPlugin with default parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin(['build']),
    ],
  };

  const result = clean();

  t.deepEqual(result, expected);
});

ava('should call CleanWebpackPlugin with custom parameter', (t) => {
  const expected = {
    plugins: [
      new CleanWebpackPlugin(['custom1', 'custom2']),
    ],
  };

  const result = clean({ paths: ['custom1', 'custom2'] });

  t.deepEqual(result, expected);
});
