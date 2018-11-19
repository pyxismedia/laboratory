import ava from 'ava';
import { entry } from './part';

ava('should have entry with default value', (t) => {
  const expected = {
    entry: './src/index.js',
  };

  const result = entry();

  t.deepEqual(result, expected);
});

ava('should be possible to customize entry value', (t) => {
  const expected = {
    entry: './app/custom.js',
  };

  const result = entry({ entry: './app/custom.js' });

  t.deepEqual(result, expected);
});
