import { EntryArgs, EntryPart, Entry } from './types';

export const entry = ({ entry = Entry.INDEX_JS }: EntryArgs): EntryPart => ({
  entry,
});
