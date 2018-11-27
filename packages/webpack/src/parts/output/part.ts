import { LibraryTarget } from 'webpack';
import { join } from 'path';
import pkgDir from 'pkg-dir';

// Determine path to package root!
const PACKAGE_DIRNAME = pkgDir.sync(__dirname) || __dirname;

export const output = ({ filename = '[name].js', path = join(PACKAGE_DIRNAME, './build'), library = 'library', libraryTarget = 'umd' as LibraryTarget } = {}) => ({
  output: {
    filename,
    path,
    libraryTarget,
    library,
  },
});
