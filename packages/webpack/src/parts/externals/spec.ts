import ava from 'ava';
import prequire from 'proxyquire';

const { externals } = prequire('./part', { 'webpack-node-externals': () => 'externals' });

ava('should return externals object', (t) => {
  const expected = {
    externals: ['externals'],
  };
  const result = externals();
  t.deepEqual(result, expected);
});
