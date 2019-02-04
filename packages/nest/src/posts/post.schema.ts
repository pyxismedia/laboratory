import { Schema } from 'mongoose';
import * as intl from 'mongoose-intl';

const { Types } = Schema;

export const PostSchema = new Schema({
  title:    { type: String,         intl: true },
  subtitle: { type: String,         intl: true },
  content:  { type: String,         intl: true },
  state:    { type: String,         intl: true },
  labels:   { type: [String],       intl: false }, // FIXME: Cannot use for Array
  date:     { type: Date,           intl: false },
  image:    { type: String,         intl: false },
  author:   { type: Types.ObjectId, intl: false },
  section:  { type: Types.ObjectId, intl: false },
});

PostSchema.plugin(intl, { languages: ['en', 'de', 'fr'], defaultLanguage: 'en '});
