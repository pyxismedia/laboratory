import ava from 'ava';
import prequire from 'proxyquire';

const { typescriptCss } = prequire.noCallThru()('./config', {
  '../typescript': { typescript: () => 'typescript' },
  '../../parts/css': { css: () => 'css' },
  '../../parts/image': { image: () => 'image' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate prod config', (t) => {
  const expected = [
    'typescript',
    'css',
    'image',
  ];

  const result = typescriptCss({});

  t.deepEqual(result, expected);
});
