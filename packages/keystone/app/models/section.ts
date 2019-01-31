import { Field, List } from 'keystone';
import imageStorage from '../storage/image';

const { Types } = Field;
const Section = new List('Section', {
  map: { name: 'name' },
});

Section.add({
  name: { type: Types.Text, required: true, initial: true, unique: true },
});

Section.register();
