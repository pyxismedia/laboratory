import ava from 'ava';
import prequire from 'proxyquire';
import { Target } from '../../parts/target/types';
import { Entry } from '../../parts/entry/types';
import { Mode } from '../../parts/mode/types';

const { typescriptCss } = prequire.noCallThru()('./config', {
  '../typescript': { typescript: ({ target, entry, mode }: { target: string, entry: string, mode: string }) => ({ target, entry, mode }) },
  '../../parts/css': { css: () => 'css' },
  '../../parts/image': { image: () => 'image' },
  '../../parts/html': { html: () => 'html' },
  '../../parts/devtool': { devtool: () => 'devtool' },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate prod config', (t) => {
  const expected = [
    {
      target: Target.WEB,
      entry: undefined,
      mode: undefined,
    },
    'css',
    'image',
    'html',
    'devtool',
  ];

  const result = typescriptCss({});

  t.deepEqual(result, expected);
});

ava('should initialize object with custom config', (t) => {
  const expected = [
    {
      target: Target.WEB,
      entry: Entry.INDEX_JS,
      mode: Mode.development,
    },
    'css',
    'image',
    'html',
    'devtool',
  ];

  const result = typescriptCss({
    target: Target.WEB,
    entry: Entry.INDEX_JS,
    mode: Mode.development,
  });

  t.deepEqual(result, expected);
});
