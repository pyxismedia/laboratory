import {Entry, EntryPart} from "../../parts/entry";
import {Clean, CleanPart} from "../../parts/clean";
import {Extension} from "../../parts/extensions";
import {Target} from "../../parts/target";
import {Mode, ModePart} from "../../parts/mode";
import {ExternalsPart} from "../../parts/externals";
import {OutputPart} from "../../parts/output";
import {TsPart} from "../../parts/ts";
import {TargetPart} from "../../parts/target/types";
import { Configuration } from 'webpack';

export interface TypescriptArgs {
  entry?: Entry;
  cleanPath?: Clean[];
  extensions?: Extension[];
  target?: Target
  mode?: Mode;
  externals?: Configuration['externals'];
}

export interface TypescriptConfig extends CleanPart, EntryPart, OutputPart, TsPart, ModePart, TargetPart {}
