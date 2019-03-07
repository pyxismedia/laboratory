import { Types } from 'mongoose';
import { PostService } from './post.service';
import { SectionService } from '../section/section.service';
export declare class PostResolver {
    private readonly postService;
    private readonly sectionService;
    constructor(postService: PostService, sectionService: SectionService);
    findAll(): Promise<import("./post.types").Post[]>;
    findById(id: Types.ObjectId): Promise<import("./post.types").Post>;
    section(post: any): Promise<import("./post.types").Section>;
}
