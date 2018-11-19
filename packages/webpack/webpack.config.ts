import { prod } from './src/configs/prod';

const DEV = 'dev.config';
const PROD = 'prod.config';

export const config = prod({
  entry: {
    [DEV]: './src/configs/dev',
    [PROD]: './src/configs/prod',
  },
  cleanPath: [
    `${DEV}.js`,
    `${PROD}.js`,
  ],
  extensions: ['.ts'],
});
