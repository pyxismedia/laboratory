import ava from 'ava';
import prequire from 'proxyquire';

class StylablePlugin {
  constructor() {}
}

const { stylable } = prequire('./part', { '@stylable/webpack-plugin': StylablePlugin });

ava('should call StylablePlugin with default parameter', (t) => {
  const expected = {};

  const result = stylable();

  t.deepEqual(result, expected);
});
