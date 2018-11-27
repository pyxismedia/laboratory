import { typescript } from './src/configs/typescript';

const CONFIGS = 'configs';

export const config = typescript({
  entry: {
    [CONFIGS]: './src/configs',
  },
  cleanPath: ['./build'],
  extensions: ['.ts'],
});
