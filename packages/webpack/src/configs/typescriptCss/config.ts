import merge from 'webpack-merge';
import { typescript } from '../typescript';
import { css } from "../../parts/css";
import { Target } from "../../parts/target/types";
import { Mode } from "../../parts/mode/part";
import { EntryValue } from '../../parts/entry/part';

export const typescriptCss = ({ target = 'web' as Target, entry, extensions, mode } = { entry: './src/index.ts' as EntryValue | string, extensions: ['.ts', '.tsx'], mode: 'production' as Mode }) => merge(
  typescript({ target, entry, extensions, mode }),
  css(),
);
