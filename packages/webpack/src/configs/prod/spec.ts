import ava from 'ava';
import prequire from 'proxyquire';

const { prod } = prequire.noCallThru()('./config', {
  '../../parts/clean': { clean: () => 'clean' },
  '../../parts/entry': { entry: () => 'entry' },
  '../../parts/module': { module: () => 'module' },
  '../../parts/externals': { externals: () => 'externals' },
  '../../parts/output': { output: () => 'output' },
  '../../parts/extensions': { extensions: () => 'extensions' },
  '../../parts/tslint': { tslint: () => 'tslint' },
  '../../parts/mode': { mode: () => 'mode' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate prod config', (t) => {
  const expected = [
    'clean',
    'entry',
    'module',
    'externals',
    'output',
    'extensions',
    'tslint',
    'mode',
  ];

  const result = prod();

  t.deepEqual(result, expected);
});
