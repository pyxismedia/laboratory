import root from 'app-root-path';
import { LibraryTarget } from 'webpack';
import { resolve } from 'path';

export const output = ({ filename = '[name].js', path = resolve(root.path, './build'), library = 'library', libraryTarget = 'umd' as LibraryTarget } = {}) => ({
  output: {
    filename,
    path,
    libraryTarget,
    library,
  },
});
