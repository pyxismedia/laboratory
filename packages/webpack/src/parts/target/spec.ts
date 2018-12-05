import ava from 'ava';
import {Target} from './types';
import prequire from 'proxyquire';

const { target } = prequire.noCallThru()('./part', {
  'webpack-node-externals': () => 'externals',
});

ava('should have target with default value', (t) => {
  const expected = {
    target: Target.NODE,
    externals: ['externals'],
    node: {
      __dirname: false,
      __filename: false,
    },
  };

  const result = target({});

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    target: Target.WEB,
    externals: ['externals'],
  };

  const result = target({ target: Target.WEB });

  t.deepEqual(result, expected);
});
