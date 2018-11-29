import ava from 'ava';
import prequire from 'proxyquire';

const { typescript } = prequire.noCallThru()('./config', {
  '../../parts/clean': { clean: () => 'clean' },
  '../../parts/entry': { entry: () => 'entry' },
  '../../parts/externals': { externals: () => 'externals' },
  '../../parts/output': { output: () => 'output' },
  '../../parts/extensions': { extensions: () => 'extensions' },
  '../../parts/ts': { ts: () => 'ts' },
  '../../parts/mode': { mode: () => 'mode' },
  '../../parts/target': { target: () => 'target' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate prod config', (t) => {
  const expected = [
    'clean',
    'entry',
    'externals',
    'output',
    'extensions',
    'ts',
    'mode',
    'target',
    {
      node: {
        __dirname: false,
        __filename: false,
      },
    },
  ];

  const result = typescript();

  t.deepEqual(result, expected);
});
