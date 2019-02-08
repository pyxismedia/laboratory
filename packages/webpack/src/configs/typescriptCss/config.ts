import merge from 'webpack-merge';
import { typescript } from '../typescript';
import { css } from "../../parts/css";
import { image } from '../../parts/image';
import { Target } from '../../parts/target';
import { html } from '../../parts/html';
import { TypescriptCssConfig, TypescriptCssArgs } from "./types";
import { devtool } from '../../parts/devtool';

export const typescriptCss = ({ target = Target.WEB, entry, mode, externals }: TypescriptCssArgs): TypescriptCssConfig => merge(
  typescript({ target, entry, mode, externals }),
  css(),
  image(),
  html({}),
  devtool(),
);
