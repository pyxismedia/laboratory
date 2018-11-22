import { typescript } from './src/configs/typescript';

const TYPESCRIPT = 'typescript.config';
const TYPESCRIPT_CSS = 'typescriptCss.config';

export const config = typescript({
  entry: {
    [TYPESCRIPT]: './src/configs/typescript',
    [TYPESCRIPT_CSS]: './src/configs/typescriptCss',
  },
  cleanPath: [
    `${TYPESCRIPT}.js`,
    `${TYPESCRIPT_CSS}.js`,
  ],
  extensions: ['.ts'],
});
