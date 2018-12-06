import { Target, TargetArgs, TargetPart } from './types';
import external from 'webpack-node-externals';

export const target = ({ target = Target.NODE, externals }: TargetArgs): TargetPart => {
  const result = (externals || (externals === null)) ? externals : [external()];
  if (target === Target.NODE) {
    return {
      target,
      externals: result,
      node: {
        __dirname: false,
        __filename: false,
      },
    }
  }
  
  return {
    target,
    externals: result,
  };
};
