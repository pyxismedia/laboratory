import ava from 'ava';
import prequire from 'proxyquire';
import { target } from './part';

ava('should have target with default value', (t) => {
  const expected = {
    target: 'node',
  };

  const result = target();

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    target: 'web',
  };

  const result = target({ target: 'web' });

  t.deepEqual(result, expected);
});
