import { Target, TargetArgs, TargetPart } from './types';
import external from 'webpack-node-externals';

export const target = ({ target = Target.NODE }: TargetArgs): TargetPart => {
  if (target === Target.NODE) {
    return {
      target,
      externals: [external()],
      node: {
        __dirname: false,
        __filename: false,
      },
    }
  }
  
  return {
    target,
    externals: [external()],
  };
};
