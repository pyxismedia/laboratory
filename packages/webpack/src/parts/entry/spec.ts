import ava from 'ava';
import { entry } from './part';
import { Entry } from './types';

ava('should have entry with default value', (t) => {
  const expected = {
    entry: {
      name: Entry.INDEX_JS,
    },
  };

  const result = entry({});

  t.deepEqual(result, expected);
});

ava('should be possible to customize entry value', (t) => {
  const expected = {
    entry: Entry.INDEX_JS,
  };

  const result = entry({ entry: Entry.INDEX_JS });

  t.deepEqual(result, expected);
});
