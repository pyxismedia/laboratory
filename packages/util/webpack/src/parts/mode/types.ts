import { Configuration, Plugin } from 'webpack';

export enum Mode {
  production = 'production',
  development = 'development',
  none = 'none',
}

export interface ModeArgs {
  mode?: Configuration['mode'];
}

export interface ModePart extends ModeArgs {
  plugins?: Plugin[] | undefined,
}
