import {TypescriptConfig} from "../typescript/types";
import {Target} from "../../parts/target";
import {Entry} from "../../parts/entry";
import {Mode} from "../../parts/mode";
import { Configuration } from 'webpack';

export interface TypescriptCssArgs {
  target?: Target;
  entry?: Entry;
  mode?: Mode;
  externals?: Configuration['externals'];
}

export interface TypescriptCssConfig extends TypescriptConfig {}
