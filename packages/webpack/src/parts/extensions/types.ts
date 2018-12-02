export enum Extension {
  JS = '.js',
  TS = '.ts',
  TSX = '.tsx',
}

export interface ExtensionsArgs {
  extensions?: Extension[];
}

export interface ExtensionsPart {
  resolve: ExtensionsArgs;
}
