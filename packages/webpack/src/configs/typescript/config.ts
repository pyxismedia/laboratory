// noinspection TsLint
import merge from 'webpack-merge';
import { clean } from '../../parts/clean';
import { entry as entries } from '../../parts/entry';
import { externals } from '../../parts/externals';
import { output } from '../../parts/output';
import { extensions as extension } from "../../parts/extensions";
import { mode as modes } from "../../parts/mode";
import { ts } from "../../parts/ts";
import { target as targets } from "../../parts/target";
import { Target } from "../../parts/target/types";
import { Mode } from "../../parts/mode/part";
import { EntryValue } from '../../parts/entry/part';

export interface ITypescript {
  entry: EntryValue | string;
  cleanPath?: string[];
  extensions: string[];
  target?: Target
  mode?: Mode;
}

export const typescript = ({ entry, cleanPath, extensions, target, mode }: ITypescript = { entry: './src/index.ts' as EntryValue | string, extensions: ['.ts', '.tsx'], target: 'node', mode: 'production' }) => merge(
  clean({ paths: cleanPath }),
  entries({ entry }),
  externals(),
  output(),
  extension({ extensions }),
  ts(),
  modes({ mode }),
  targets({ target }),
  {
    node: {
      __dirname: false,
    },
  },
);
