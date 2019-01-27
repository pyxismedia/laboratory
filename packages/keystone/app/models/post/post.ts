import { Field, List } from 'keystone';
import imageStorage from '../../storage/image';

const { Types } = Field;
const Post = new List('Post');

Post.add({
  image: { type: Types.File, storage: imageStorage, required: true, initial: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
  title: { type: Types.Text, required: true, initial: true, unique: true },
  subtitle: { type: Types.Text, required: true, initial: true },
  content: { type: Types.Markdown, required: true, initial: true },
  date: { type: Types.Date },
  author: { type: Types.Relationship, ref: 'User' },
  section: { type: Types.Relationship, ref: 'Section' },
  labels: { type: Types.TextArray },
});

Post.register();
