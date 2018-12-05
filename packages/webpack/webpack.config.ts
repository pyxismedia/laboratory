import { typescript } from './src/configs/typescript';
import { Mode } from './src/parts/mode';
import webpackMerge from "webpack-merge";
import {externals} from "./src/parts/externals";

const CONFIGS = 'configs';
const TYPESCRIPT_CSS = 'configs/typescriptCss';
const TYPESCRIPT = 'configs/typescript';

export const config = webpackMerge(typescript({
  mode: Mode.development,
  entry: {
    [CONFIGS]: './src/configs',
    [TYPESCRIPT_CSS]: './src/configs/typescriptCss',
    [TYPESCRIPT]: './src/configs/typescript',
    // Parts
    'parts/decorate': './src/parts/decorate',
    'parts/html': './src/parts/html',
    'parts/yaml': './src/parts/yaml',
    // Babel register
    'register/typescript': './src/register/typescript',
  },
}));
