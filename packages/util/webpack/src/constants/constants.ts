import pkgDir from 'pkg-dir';
import { join } from 'path';

export const PACKAGE_DIRNAME = pkgDir.sync(__dirname) || __dirname;

  export const APP_DIRNAME = process.cwd();

const REQUIRE_NODE_MODULES_OPTIONS = {
  paths: [join(APP_DIRNAME, 'node_modules'), join(PACKAGE_DIRNAME, 'node_modules')],
};

export const resolve = (modules: string) => require.resolve(modules, REQUIRE_NODE_MODULES_OPTIONS);