import root from 'app-root-path';
import { LibraryTarget } from 'webpack';

export const output = ({ filename = '[name].js', path = root.path, library = 'library', libraryTarget = 'umd' as LibraryTarget } = {}) => ({
  output: {
    filename,
    path,
    libraryTarget,
    library,
  },
});
