import { Field, List } from 'keystone';
import * as intl from 'mongoose-intl';
import imageStorage from '../../storage/image';
import { I18n, Code } from '../../services/I18n';

const { Types } = Field;
const Post = new List('Post', {
  drilldown: 'section',
  autokey: { path: 'slug', from: 'title.en', unique: true, fixed: true },
  map: { name: 'title.en' },
});

Post.schema.plugin(intl, { languages: ['en', 'de', 'fr'], defaultlanguage: 'en' });

Post.add({
  locale: { type: Types.Select, options: I18n.LANGUAGES, note: 'Please select language mutation.', default: 'en' },
  title: { 
    en: { label: 'Title', type: Types.Text, required: true, initial: true, unique: true, index: true, dependsOn: { locale: Code.en }, note: 'Headline of the post. Translatable.' },
    de: { label: 'Title', type: Types.Text, unique: true, index: true, dependsOn: { locale: Code.de }, note: 'Headline of the post. Translatable.' },
    fr: { label: 'Title', type: Types.Text, unique: true, index: true, dependsOn: { locale: Code.fr }, note: 'Headline of the post. Translatable.' },
  },
  image: { type: Types.File, storage: imageStorage, required: true, initial: true },
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', note: 'Please choose one of possible states. e.g., Draft, Published, Archived.' },
  subtitle: {
    en: { label: 'Subtitle', type: Types.Text, required: true, initial: true, dependsOn: { locale: Code.en }, note: 'Short description of the post. Translatable.' },
    de: { label: 'Subtitle', type: Types.Text, dependsOn: { locale: Code.de }, note: 'Short description of the post. Translatable.' },
    fr: { label: 'Subtitle', type: Types.Text, dependsOn: { locale: Code.fr }, note: 'Short description of the post. Translatable.' },
  },
  content: {
    en: { label: 'Content', type: Types.Html, wysiwyg: true, required: true, initial: true, dependsOn: { locale: Code.en }, note: 'Formatted content of the post. Translatable.' },
    de: { label: 'Content', type: Types.Html, wysiwyg: true, dependsOn: { locale: Code.de }, note: 'Formatted content of the post. Translatable.' },
    fr: { label: 'Content', type: Types.Html, wysiwyg: true, dependsOn: { locale: Code.fr }, note: 'Formatted content of the post. Translatable.' }
  },
  date: { type: Types.Date, note: 'Represent date of release of the post.' },
  author: { type: Types.Relationship, ref: 'User', note: 'Name of author of the post.' },
  section: { type: Types.Relationship, ref: 'Section', note: 'Choose section under which will post release. If your section doesn\'t exists please create it under Sections.' },
  labels: { type: Types.TextArray, note: 'Provide labels according conventions.' },
});

Post.defaultColumns = 'title.en, state|20%, author, published|15%'

Post.register();
