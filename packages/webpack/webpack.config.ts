import { typescript } from './src/configs/typescript';
import { Mode } from './src/parts/mode';

const CONFIGS = 'configs';
const TYPESCRIPT_CSS = 'configs/typescriptCss';
const TYPESCRIPT = 'configs/typescript';

export const config = typescript({
  mode: Mode.development,
  entry: {
    [CONFIGS]: './src/configs',
    [TYPESCRIPT_CSS]: './src/configs/typescriptCss',
    [TYPESCRIPT]: './src/configs/typescript',
    'parts/decorate': './src/parts/decorate',
  },
});
