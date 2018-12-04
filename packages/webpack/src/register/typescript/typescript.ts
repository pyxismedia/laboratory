// @ts-ignore
import register from '@babel/register';
// @ts-ignore
import pluginProposalClassProperties from "@babel/plugin-proposal-class-properties";
// @ts-ignore
import pluginProposalObjectRestSpread from "@babel/plugin-proposal-object-rest-spread";
// @ts-ignore
import presetEnv from "@babel/preset-env";
// @ts-ignore
import presetTypescript from "@babel/preset-typescript";

register({
  extensions: ['.ts'],
  presets: [
    presetEnv,
    presetTypescript,
  ],
  plugins: [
    pluginProposalClassProperties,
    pluginProposalObjectRestSpread,
  ],
});

/* tslint:disable */
eval(`
const { join } = require('path');
require(join(process.cwd(), process.argv[2]));
`);
/* tslint:enable */
