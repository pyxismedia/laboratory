import ava from 'ava';
import {target} from './part';
import {Target} from './types';

ava('should have target with default value', (t) => {
  const expected = {
    target: Target.NODE,
  };

  const result = target({});

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    target: Target.WEB,
  };

  const result = target({ target: Target.WEB });

  t.deepEqual(result, expected);
});
