import { typescript } from './src/configs/typescript';

const CONFIGS = 'configs';
const TYPESCRIPT_CSS = 'typescriptCss';
const TYPESCRIPT = 'typescript';

export const config = typescript({
  mode: 'development',
  entry: {
    [CONFIGS]: './src/configs',
    'configs/typescriptCss': './src/configs/typescriptCss',
    'configs/typescript': './src/configs/typescript',
    'parts/decorate': './src/parts/decorate',
  },
  extensions: ['.ts'],
});
