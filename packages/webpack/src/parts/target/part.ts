import { Target, TargetArgs, TargetPart } from './types';

export const target = ({ target = Target.NODE }: TargetArgs): TargetPart => ({
  target,
});
