import { Model, Types } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Post, CreatePostDto } from './post.types';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const post = { // TODO: Post
      _id: Types.ObjectId(),
      ...createPostDto,
    }
    const createdPost = new this.postModel(createPostDto);
    return await createdPost.save();
  }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<Post> {
    return await this.postModel.findById(id);
  }
}
