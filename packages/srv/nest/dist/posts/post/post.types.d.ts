import { Document } from 'mongoose';
export interface Post extends Document {
    title: string;
}
export interface Section extends Document {
    name: string;
}
export declare class CreatePostDto {
    readonly title: string;
}
