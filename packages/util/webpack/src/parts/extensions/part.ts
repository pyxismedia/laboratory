import { ExtensionsArgs, ExtensionsPart, Extension } from './types';

export const extensions = ({ extensions = [Extension.JS] }: ExtensionsArgs): ExtensionsPart => ({
  resolve: {
    extensions,
  },
});
