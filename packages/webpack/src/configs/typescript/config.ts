// noinspection TsLint
import merge from 'webpack-merge';
import { clean } from '../../parts/clean';
import { entry as entries } from '../../parts/entry';
import { externals } from '../../parts/externals';
import { output } from '../../parts/output';
import { extensions as extension } from "../../parts/extensions";
import { mode } from "../../parts/mode";
import { ts } from "../../parts/ts";

export interface ITypescript {
  entry: string;
  cleanPath?: string[];
  extensions: string[];
}

export const typescript = ({ entry, cleanPath, extensions }: ITypescript = { entry: './src/index.js', extensions: ['.ts', '.tsx'] }) => merge(
  clean({ paths: cleanPath }),
  entries({ entry }),
  externals(),
  output(),
  extension({ extensions }),
  ts(),
  mode(),
);
