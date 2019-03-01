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
// @ts-ignore
import pluginProposalDecorators from '@babel/plugin-proposal-decorators';
import { BABELRC } from "./types";

export const babelrc: BABELRC = {
  presets: [[env, {
    "targets": {
      // https://esausilva.com/2017/07/11/uncaught-referenceerror-regeneratorruntime-is-not-defined-two-solutions/
      "browsers": ["last 2 Chrome versions"]
    }
  }], typescript, react],
  plugins: [
    [pluginProposalDecorators, { legacy: true }],
    [pluginClassProperties, { loose: true }],
    pluginObjectRestSpread
  ]
};
