import ava from 'ava';
import {Target} from './types';
import prequire from 'proxyquire';

const { target } = prequire.noCallThru()('./part', {
  'webpack-node-externals': () => 'externals',
});

ava('should have target node with default value', (t) => {
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

ava('should have target node with custom externals value', (t) => {
  const expected = {
    target: Target.NODE,
    externals: 'externals2',
    node: {
      __dirname: false,
      __filename: false,
    },
  };

  const result = target({ target: Target.NODE, externals: 'externals2' });

  t.deepEqual(result, expected);
});

ava('should have target web with custom value', (t) => {
  const expected = {
    target: Target.WEB,
  };

  const result = target({ target: Target.WEB });

  t.deepEqual(result, expected);
});

ava('should not have target web with custom externals value', (t) => {
  const expected = {
    target: Target.WEB,
    externals: 'externals2',
  };

  const result = target({ target: Target.WEB, externals: 'externals2' });

  t.notDeepEqual(result.externals, expected.externals);
});
