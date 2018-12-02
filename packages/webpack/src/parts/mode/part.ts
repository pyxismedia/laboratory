import { Mode, ModeArgs, ModePart } from './types';

export const mode = ({ mode = Mode.production }: ModeArgs): ModePart => ({
  mode,
});
