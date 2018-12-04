import ava from 'ava';
import prequire from 'proxyquire';
import { Target } from '../../parts/target/types';
import { Entry } from '../../parts/entry/types';
import { Mode } from '../../parts/mode/types';

const { typescriptCss } = prequire.noCallThru()('./config', {
  '../typescript': { typescript: ({ target, entry, mode }) => ({ target, entry, mode }) },
  '../../parts/css': { css: () => 'css' },
  '../../parts/image': { image: () => 'image' },
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
  ];

  const result = typescriptCss({
    target: Target.WEB,
    entry: Entry.INDEX_JS,
    mode: Mode.development,
  });

  t.deepEqual(result, expected);
});
