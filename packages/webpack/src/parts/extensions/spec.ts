import ava from 'ava';
import { extensions } from './part';

ava('should be possible to have default value', (t) => {
  const expected = {
    resolve: {
      extensions: ['.js'],
    },
  };

  const result = extensions();

  t.deepEqual(result, expected);
});

ava('should be possible to customize entry value', (t) => {
  const expected = {
    resolve: {
      extensions: ['.ts'],
    },
  };

  const result = extensions({ extensions: ['.ts'] });

  t.deepEqual(result, expected);
});
