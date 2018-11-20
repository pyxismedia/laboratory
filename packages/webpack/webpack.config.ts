import { typescript } from './src/configs/typescript';

const TYPESCRIPT = 'typescript.config';

export const config = typescript({
  entry: {
    [TYPESCRIPT]: './src/configs/typescript',
  },
  cleanPath: [
    `${TYPESCRIPT}.js`,
  ],
  extensions: ['.ts'],
});
