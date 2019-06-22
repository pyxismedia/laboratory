import { Document, Types } from 'mongoose'

export interface User extends Document {
  _id: Types.ObjectId;
  forname: string;
  surname: string;
  email: string;
  password: string;
}
