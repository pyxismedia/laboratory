import { Schema } from 'mongoose';

const { Types } = Schema;

export const UserSchema = new Schema({
  _id:      { type: Types.ObjectId },
  forname:  { type: Types.String, required: true },
  surname:  { type: Types.String, required: true },
  email:    { type: Types.String, required: true },
  password: { type: Types.String, required: true }
});
