import { Model, Types } from 'mongoose';
import { Section } from '../post/post.types';
export declare class SectionService {
    private readonly sectionModel;
    constructor(sectionModel: Model<Section>);
    findById(id: Types.ObjectId): Promise<Section>;
}
