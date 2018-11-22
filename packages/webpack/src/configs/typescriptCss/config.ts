import merge from 'webpack-merge';
import { typescript } from '../typescript';
import { css } from "../../parts/css";
import { Target } from "../../parts/target/part";
import { Mode } from "../../parts/mode/part";

export const typescriptCss = ({ target = 'web' as Target, entry, extensions, mode } = { entry: './src/index.ts', extensions: ['.ts', '.tsx'], mode: 'production' as Mode }) => merge(
  typescript({ target, entry, extensions, mode }),
  css(),
);
