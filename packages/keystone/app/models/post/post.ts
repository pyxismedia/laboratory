import { Field, List } from 'keystone';
import * as intl from 'mongoose-intl';
import imageStorage from '../../storage/image';

const { Types } = Field;
const Post = new List('Post', {
  drilldown: 'author',
  autokey: { path: 'slug', from: 'title.en', unique: true, fixed: true },
  map: { name: 'title.en' },
});

Post.schema.plugin(intl, { languages: ['en', 'de', 'fr'], defaultlanguage: 'en' });

Post.add({
  locale: { type: Types.Select, options: [ { value: 'en', label: 'English' }, { value: 'de', label: 'German' }, { value: 'fr', label: 'French' } ], note: 'Please select language mutation.', default: 'en' },
  title: { 
    en: { label: 'Title', type: Types.Text, required: true, initial: true, unique: true, index: true, dependsOn: { locale: 'en' }, note: 'Headline of the post.' },
    de: { label: 'Title', type: Types.Text, unique: true, index: true, dependsOn: { locale: 'de' }, note: 'Headline of the post.' },
    fr: { label: 'Title', type: Types.Text, unique: true, index: true, dependsOn: { locale: 'fr' }, note: 'Headline of the post.' },
  },
  image: { type: Types.File, storage: imageStorage, required: true, initial: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', note: 'Please choose one of possible states. e.g., Draft, Published, Archived.' },
  subtitle: {
    en: { label: 'Subtitle', type: Types.Text, required: true, initial: true, dependsOn: { locale: 'en' }, note: 'Short description of the post.' },
    de: { label: 'Subtitle', type: Types.Text, dependsOn: { locale: 'de' }, note: 'Short description of the post.' },
    fr: { label: 'Subtitle', type: Types.Text, dependsOn: { locale: 'fr' }, note: 'Short description of the post.' },
  },
  content: {
    en: { label: 'Content', type: Types.Html, wysiwyg: true, required: true, initial: true, dependsOn: { locale: 'en' }, note: 'Formatted content of the post.' },
    de: { label: 'Content', type: Types.Html, wysiwyg: true, dependsOn: { locale: 'de' }, note: 'Formatted content of the post.' },
    fr: { label: 'Content', type: Types.Html, wysiwyg: true, dependsOn: { locale: 'fr' }, note: 'Formatted content of the post.' }
  },
  date: { type: Types.Date, note: 'Represent date of release of the post.' },
  author: { type: Types.Relationship, ref: 'User', note: 'Name of author of the post.' },
  section: { type: Types.Relationship, ref: 'Section', note: 'Choose section under which will post release. If your section doesn\'t exists please create it under Sections.' },
  labels: { type: Types.TextArray, note: 'Provide labels according conventions.' },
});

Post.defaultColumns = 'title.en, state|20%, author, published|15%'

Post.register();
