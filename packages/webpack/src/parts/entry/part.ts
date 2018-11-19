import { Entry } from "webpack/declarations/WebpackOptions";

export const entry = ({ entry = './src/index.js' } = {}): { entry: Entry | Entry[] | string | string[] } => ({
  entry,
});
