import babel from '@pyxis/webpack/build/parts/ts/babelrc/.babelrc.json';
import { APP_DIRNAME } from '../constants';

console.log('TEST TEST TEST TEST TEST');

export const config = {
  require: [
    '@pyxis/webpack/build/register/ava.js'
  ],
  files: [
    APP_DIRNAME + '/src/**/spec.ts',
  ],
  sources: [
    APP_DIRNAME + '/src/**/*.ts',
  ],
  babel: {
    extensions: ['ts'],
    testOptions: babel,
  },
  verbose: true
};
