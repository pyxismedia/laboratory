import { Document, Types } from 'mongoose'

export enum PostState {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED'
}

export interface Post extends Document {
  title: string;
  subtitle: string;
  content: string;
  image: string;
  state: PostState;
  labels: string[];
  author: Types.ObjectId;
  section: Types.ObjectId;
  //
  id: Types.ObjectId;
  authorOfLastChange: Types.ObjectId;
  dateOfCreation: Date;
  dateOfLastChange: Date;
}

export interface Section extends Document {
  name: string;
}

export class CreatePostDto {
  readonly title: string;
  readonly subtitle: string;
  readonly content: string;
  readonly image: string;
  readonly state: PostState;
  readonly labels: string[];
  readonly author: Types.ObjectId;
  readonly section: Types.ObjectId;
}
