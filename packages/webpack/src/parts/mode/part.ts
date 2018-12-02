import { Mode, ModeArgs, ModePart } from './types';

export const mode = ({ mode = Mode.none }: ModeArgs): ModePart => ({
  mode,
});
