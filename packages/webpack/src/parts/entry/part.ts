
export interface EntryValue {
  [name: string]: string;
}

export interface IEntry {
  entry?: EntryValue | string;
}

const initial = {
  name: './src/index.js',
};

export const entry = ({ entry = initial }: IEntry = {}) => ({
  entry,
});
