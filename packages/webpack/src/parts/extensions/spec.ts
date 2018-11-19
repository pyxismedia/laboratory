import ava from 'ava';
import { extensions } from './part';

ava('should be possible to customize entry value', (t) => {
  const expected = {
    resolve: {
      extensions: ['.ts'],
    },
  };

  const result = extensions({ extensions: ['.ts'] });

  t.deepEqual(result, expected);
});
