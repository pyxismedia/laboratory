import merge from 'webpack-merge';
import {clean} from '../../parts/clean';
import {entry as entries, Entry} from '../../parts/entry';
import {output} from '../../parts/output';
import {mode as modes, Mode} from "../../parts/mode";
import {ts} from "../../parts/ts";
import {target as targets} from "../../parts/target";
import { Extension, extensions as extension } from '../../parts/extensions';
import { TypescriptArgs, TypescriptConfig } from "./types";

export const typescript = ({ entry = Entry.INDEX_TS, extensions = [Extension.TS, Extension.TSX, Extension.JS], mode = Mode.development,
                             target, cleanPath, externals }: TypescriptArgs): TypescriptConfig => merge(
  clean({ paths: cleanPath }),
  entries({ entry }),
  output({}),
  extension({ extensions }),
  ts(),
  modes({ mode }),
  targets({ target, externals }),
);
