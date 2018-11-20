
export interface IEntry {
  [name: string]: string;
}

export const entry = ({ entry = './src/index.js' } = {}): { entry: IEntry | string } => ({
  entry,
});
