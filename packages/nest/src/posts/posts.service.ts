import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Post } from './posts.interface';
import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel('Post') private readonly postModel: Model<Post>,
  ) {}

  // async create(createPostDto: CreatePostDto): Promise<Post> {
  //   const createdPost = new this.postModel(createPostDto);
  //   return await createdPost.save();
  // }

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }
}
