import {Entry} from "../../../parts/entry";
import {Clean} from "../../../parts/clean";
import {Extension} from "../../../parts/extensions";
import {Target} from "../../../parts/target";
import {Mode } from "../../../parts/mode";
import { Configuration } from 'webpack';
import { TypescriptConfig } from '../types';

export interface TypescriptStylableArgs {
  entry?: Entry;
  cleanPath?: Clean[];
  extensions?: Extension[];
  target?: Target
  mode?: Mode;
  externals?: Configuration['externals'];
}

// TODO Stylable part
export interface TypescriptStylableConfig extends TypescriptConfig {}

