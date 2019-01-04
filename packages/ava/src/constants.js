import pkgDir from 'pkg-dir';

export const PACKAGE_DIRNAME = pkgDir.sync(__dirname) || __dirname;

export const APP_DIRNAME = process.cwd();