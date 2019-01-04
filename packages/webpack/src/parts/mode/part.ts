import { Mode, ModeArgs, ModePart } from './types';
import { DefinePlugin } from 'webpack';

export const mode = ({ mode = Mode.production }: ModeArgs): ModePart => ({
  mode,
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
  ],
});
