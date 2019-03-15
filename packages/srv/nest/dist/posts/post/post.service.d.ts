import { Model } from 'mongoose';
import { Post, CreatePostDto } from './post.types';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
    findAll(): Promise<Post[]>;
    findById(id: any): Promise<Post>;
}
