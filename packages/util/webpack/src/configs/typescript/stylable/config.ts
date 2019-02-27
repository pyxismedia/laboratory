import merge from 'webpack-merge';
import { typescript } from '../../typescript';
import { image } from '../../../parts/image';
import { Target } from '../../../parts/target';
import { html } from '../../../parts/html';
import { TypescriptStylableArgs, TypescriptStylableConfig } from './types';
import { devtool } from '../../../parts/devtool';
import { stylable } from '../../../parts/stylable';
import { Extension, extensions as extension } from '../../../parts/extensions';
import { pyxis } from '../../../parts/pyxis';
import { ts } from '../../../parts/ts';
import { svg } from '../../../parts/svg';

export const config = ({ target = Target.WEB, entry, mode, externals }: TypescriptStylableArgs): TypescriptStylableConfig => merge(
  typescript({ target, entry, mode, externals }),
  stylable(),
  image(),
  html({}),
  devtool(),
  svg(),
);

export const storybook = () => merge(
  extension({ extensions: [Extension.TS, Extension.TSX] }),
  ts(),
  pyxis(),
  stylable(),
  svg(),
);
