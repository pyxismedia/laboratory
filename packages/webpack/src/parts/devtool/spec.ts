import ava from 'ava';
import { devtool } from './part';
import { Devtool } from './types';

ava('should return default configuration', (t) => {
  const expected = {
    devtool: Devtool.INLINE_SOURCE_MAP,
  };

  const result = devtool();

  t.deepEqual(result, expected);
});