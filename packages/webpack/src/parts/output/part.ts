import { join } from 'path';
import { Filename, Library, Path, LibraryTarget, OutputArgs } from './types';
import {APP_DIRNAME} from "../../constants";

export const output = ({ filename = Filename.AUTO, path = Path.BUILD,
                         library = Library.LIBRARY, libraryTarget = LibraryTarget.UMD }: OutputArgs) => ({
  output: {
    filename,
    libraryTarget,
    library,
    path: join(APP_DIRNAME, path),
  },
});
