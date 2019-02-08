import ava from 'ava';
import { devServer } from './part';
import * as webpack from "webpack";
import { Host } from './types';

ava('should return default configuration', (t) => {
  const expected = {
    devServer: {
      stats: 'errors-only' as webpack.Options.Stats,
      host: '0.0.0.0',
      port: 3000,
      open: true,
      overlay: true,
    },
  };

  const result = devServer({});

  t.deepEqual(result, expected);
});

ava('should be customizable host and port', (t) => {
  const expected = {
    devServer: {
      stats: 'errors-only' as webpack.Options.Stats,
      host: 'localhost',
      port: 8080,
      open: true,
      overlay: true,
    },
  };

  const result = devServer({ host: Host.LOCALHOST, port: 8080 });

  t.deepEqual(result, expected);
});
