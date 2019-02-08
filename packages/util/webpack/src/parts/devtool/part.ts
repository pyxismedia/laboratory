import { Devtool, DevtoolPart } from './types';

export const devtool = (): DevtoolPart => ({
  devtool: Devtool.INLINE_SOURCE_MAP,
});