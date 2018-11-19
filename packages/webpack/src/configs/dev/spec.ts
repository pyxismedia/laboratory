import ava from 'ava';
import prequire from 'proxyquire';

const { dev } = prequire.noCallThru()('./config', {
  '../../parts/devServer': { devServer: () => 'devServer' },
  '../../parts/html': { html: () => 'html' },
  '../../parts/entry': { entry: () => 'entry' },
  '../../parts/output': { output: () => 'output' },
  '../../parts/module': { module: () => 'module' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate dev config', (t) => {
  const expected = [
    'devServer',
    'html',
    'entry',
    'output',
    'module',
  ];

  const result = dev();

  t.deepEqual(result, expected);
});
