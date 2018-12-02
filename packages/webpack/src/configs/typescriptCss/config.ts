import merge from 'webpack-merge';
import { typescript } from '../typescript';
import { css } from "../../parts/css";
import { Target } from '../../parts/target';
import { TypescriptCssConfig, TypescriptCssArgs } from "./types";

export const typescriptCss = ({ target = Target.WEB, entry, mode }: TypescriptCssArgs): TypescriptCssConfig => merge(
  typescript({ target, entry, mode }),
  css(),
);
