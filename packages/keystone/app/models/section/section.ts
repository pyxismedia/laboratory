import { Field, List } from 'keystone';
import { I18n, Code } from '../../services/I18n';

const { Types } = Field;
const Section = new List('Section', {
  autokey: { path: 'slug', from: 'name.en', unique: true, fixed: true },
  map: { name: 'name.en' },
});

Section.add({
  locale: { type: Types.Select, options: I18n.LANGUAGES, note: 'Please select language mutation.', default: Code.en },
  name: {
    en: { type: Types.Text, required: true, initial: true, unique: true, index: true, dependsOn: { locale: Code.en } },
    de: { type: Types.Text, unique: true, dependsOn: { locale: Code.de } },
    fr: { type: Types.Text, unique: true, dependsOn: { locale: Code.fr } },
  },
});

Section.register();
