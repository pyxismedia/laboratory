// @ts-ignore
import env from '@babel/preset-env';
// @ts-ignore
import typescript from '@babel/preset-typescript';
// @ts-ignore
import react from '@babel/preset-react';
// @ts-ignore
import pluginClassProperties from '@babel/plugin-proposal-class-properties';
// @ts-ignore
import pluginObjectRestSpread from '@babel/plugin-proposal-object-rest-spread';
import { BABELRC } from "./types";

export const babelrc: BABELRC = {
  presets: [env, typescript, react],
  plugins: [pluginClassProperties, pluginObjectRestSpread],
};
