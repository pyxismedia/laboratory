import ava from 'ava';
import {Mode} from "./types";
import prequire from 'proxyquire';

class DefinePlugin {
  constructor(public options: { 'process.env.NODE_ENV': string }) {}
}

const { mode } = prequire('./part', {
  webpack: { DefinePlugin },
});

ava('should have target with default value', (t) => {
  const expected = {
    mode: Mode.production,
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(Mode.production),
      }),
    ],
  };

  const result = mode({});

  t.deepEqual(result, expected);
});

ava('should have target with custom value', (t) => {
  const expected = {
    mode: Mode.development,
    plugins: [
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(Mode.development),
      }),
    ],
  };

  const result = mode({ mode: Mode.development });

  t.deepEqual(result, expected);
});
