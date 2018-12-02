import ava from 'ava';
import { mode } from './part';
import {Mode} from "./types";

ava('should have target with default value', (t) => {
  const expected = {
    mode: Mode.production,
  };

  const result = mode({});

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    mode: Mode.development,
  };

  const result = mode({ mode: Mode.development });

  t.deepEqual(result, expected);
});
