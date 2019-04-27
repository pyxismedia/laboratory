export enum Extension {
  JS = '.js',
  TS = '.ts',
  TSX = '.tsx',
  YAML = '.yaml',
  VUE = '.vue',
}

export interface ExtensionsArgs {
  extensions?: Extension[];
}

export interface ExtensionsPart {
  resolve: ExtensionsArgs;
}
