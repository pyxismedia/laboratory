import merge from 'webpack-merge';
import {clean} from '../../parts/clean';
import {entry as entries, Entry} from '../../parts/entry';
import {externals} from '../../parts/externals';
import {output} from '../../parts/output';
import {mode as modes} from "../../parts/mode";
import {ts} from "../../parts/ts";
import {target as targets} from "../../parts/target";
import {Extension, extensions as extension} from '../../parts/extensions';
import {TypescriptArgs, TypescriptConfig} from "./types";

export const typescript = ({ entry = Entry.INDEX_TS, extensions = [Extension.TS, Extension.TSX, Extension.JS],
                             target, mode, cleanPath }: TypescriptArgs): TypescriptConfig => merge(
  clean({ paths: cleanPath }),
  entries({ entry }),
  externals(),
  output({}),
  extension({ extensions }),
  ts(),
  modes({ mode }),
  targets({ target }),
  {
    node: {
      __dirname: false,
      __filename: false,
    },
  },
);
