import { Target, TargetArgs, TargetPart } from './types';
import external from 'webpack-node-externals';

export const target = ({ target = Target.NODE, externals }: TargetArgs): TargetPart => {
  if (target === Target.NODE) {
    return {
      target,
      externals: externals ? externals : [external()],
      node: {
        __dirname: false,
        __filename: false,
      },
    }
  }
  
  return {
    target,
    externals: externals ? externals : [external()],
  };
};
