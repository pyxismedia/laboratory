// noinspection TsLint
import merge from 'webpack-merge';
import { clean } from '../../parts/clean';
import { entry as entries } from '../../parts/entry';
import { module } from '../../parts/module';
import { externals } from '../../parts/externals';
import { output } from '../../parts/output';
import { extensions as extension } from "../../parts/extensions";
import { Entry } from "webpack/declarations/WebpackOptions";
import { tslint } from "../../parts/tslint";

export interface IProd {
  entry: Entry | Entry[] | string | string[];
  cleanPath?: string[];
  extensions: string[];
}

export const prod = ({ entry, cleanPath, extensions }: IProd = { entry: './src/index.js', extensions: ['.js'] }) => merge(
  clean({ paths: cleanPath }),
  entries({ entry }),
  module(),
  externals(),
  output(),
  extension({ extensions }),
  tslint(),
);
