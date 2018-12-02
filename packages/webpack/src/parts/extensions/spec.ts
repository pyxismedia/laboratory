import ava from 'ava';
import { extensions } from './part';
import {Extension} from "./types";

ava('should be possible to have default value', (t) => {
  const expected = {
    resolve: {
      extensions: [Extension.JS],
    },
  };

  const result = extensions({});

  t.deepEqual(result, expected);
});

ava('should be possible to customize entry value', (t) => {
  const expected = {
    resolve: {
      extensions: [Extension.TS],
    },
  };

  const result = extensions({ extensions: [Extension.TS] });

  t.deepEqual(result, expected);
});
