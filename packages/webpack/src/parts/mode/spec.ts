import ava from 'ava';
import prequire from 'proxyquire';
import { mode } from './part';

ava('should have target with default value', (t) => {
  const expected = {
    mode: 'production',
  };

  const result = mode();

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    mode: 'development',
  };

  const result = mode({ mode: 'development' });

  t.deepEqual(result, expected);
});
