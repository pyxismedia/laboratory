import { typescript } from './src/configs/typescript';
import { IEntry } from './src/parts/entry/part';

const CONFIGS = 'configs';
const TYPESCRIPT_CSS = 'typescriptCss';
const TYPESCRIPT = 'typescript';

export const config = typescript<IEntry>({
  mode: 'development',
  entry: {
    [CONFIGS]: './src/configs',
    'configs/typescriptCss': './src/configs/typescriptCss',
    'configs/typescript': './src/configs/typescript',
    // TODO Add parts
  },
  cleanPath: ['./build/**/*'], //TODO Doesn't work
  extensions: ['.ts'],
});
