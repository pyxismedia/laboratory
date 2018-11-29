import { LibraryTarget } from 'webpack';
import { join } from 'path';
import { APP_DIRNAME } from '../../constants';

export const output = ({ filename = '[name].js', path = join(APP_DIRNAME, './build'), library = 'library', libraryTarget = 'umd' as LibraryTarget } = {}) => ({
  output: {
    filename,
    path,
    libraryTarget,
    library,
  },
});
