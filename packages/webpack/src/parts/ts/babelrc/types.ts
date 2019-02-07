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
// @ts-ignore
// import pluginTransformModulesCommonjs from '@babel/plugin-transform-modules-commonjs';

export type BABELRC = {
  presets: [env, typescript, react],
  plugins: [
    [pluginProposalDecorators, { legacy: true }],
    pluginClassProperties,
    pluginObjectRestSpread
    // pluginTransformModulesCommonjs
  ],
}
