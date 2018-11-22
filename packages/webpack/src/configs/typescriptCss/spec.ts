import ava from 'ava';
import prequire from 'proxyquire';

const { typescriptCss } = prequire.noCallThru()('./config', {
  '../typescript': { typescript: () => 'typescript' },
  '../../parts/css': { css: () => 'css' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate prod config', (t) => {
  const expected = [
    'typescript',
    'css',
  ];

  const result = typescriptCss();

  t.deepEqual(result, expected);
});
