import ava from 'ava';
import prequire from 'proxyquire';
import { Clean } from '../../parts/clean';
import { Mode } from '../../parts/mode/types';
import { Target } from '../../parts/target/types';
import { Entry } from '../../parts/entry/types';
import { Extension } from '../../parts/extensions/types';

const { typescript } = prequire.noCallThru()('./config', {
  '../../parts/clean': { clean: ({ paths }: { paths: string[] }) => ({ paths }) },
  '../../parts/entry': {
    entry: ({ entry }: { entry: string }) => ({ entry }),
    Entry: {
      INDEX_TS: './src/index.ts',
    }
  },
  '../../parts/output': { output: () => 'output' },
  '../../parts/extensions': {
    extensions: ({ extensions }: { extensions: string[] }) => ({ extensions }),
    Extension: {
      TS: '.ts',
      TSX: '.tsx',
      JS: '.js'
    }
  },
  '../../parts/ts': { ts: () => 'ts' },
  '../../parts/mode': { mode: ({ mode }: { mode: string }) => ({ mode }) },
  '../../parts/target': { target: ({ target }: { target: string }) => ({ target }) },
  'webpack-merge': (...data: any) => ([ ...data ]),
});

ava('should generate default prod config', (t) => {
  const expected = [
    { paths: undefined },
    { entry: './src/index.ts' },
    'output',
    { extensions: ['.ts', '.tsx', '.js'] },
    'ts',
    { mode: undefined },
    { target: undefined },
  ];

  const result = typescript({});

  t.deepEqual(result, expected);
});

ava('should generate customized config', (t) => {
  const expected = [
    { paths: [Clean.DIST] },
    { entry: Entry.INDEX_JS },
    'output',
    { extensions: [Extension.JS] },
    'ts',
    { mode: Mode.development },
    { target: Target.WEB },
  ];

  const result = typescript({
    cleanPath: [Clean.DIST],
    mode: Mode.development,
    target: Target.WEB,
    entry: Entry.INDEX_JS,
    extensions: [Extension.JS],
  })

  t.deepEqual(result, expected);
});
