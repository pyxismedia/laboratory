import { Schema } from 'mongoose';

const { Types } = Schema;

export const PostSchema = new Schema({
  _id:      { type: Types.ObjectId },
  title:    { type: String, intl: true },
  subtitle: { type: String, intl: true },
  content:  { type: String, intl: true },
  state:    { type: String, intl: true },
  labels:   { type: [String] }, // FIXME: Cannot use for Array
  date:     { type: Date },
  image:    { type: String },
  author:   { type: Types.ObjectId },
  section:  { type: Types.ObjectId },
});
