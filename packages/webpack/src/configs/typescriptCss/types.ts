import {TypescriptConfig} from "../typescript/types";
import {Target} from "../../parts/target";
import {Entry} from "../../parts/entry";
import {Mode} from "../../parts/mode";

export interface TypescriptCssArgs {
  target?: Target;
  entry?: Entry;
  mode?: Mode;
}

export interface TypescriptCssConfig extends TypescriptConfig {}
