import { Query, Resolver, Args, ResolveProperty, Parent, Mutation } from '@nestjs/graphql'
import { Types } from 'mongoose';
import { PostService } from './post.service';
import { SectionService } from '../section/section.service';
import { CreatePostDto, Post } from './post.types'

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly sectionService: SectionService,
  ) {}

  @Query('posts')
  async findAll() {
    return await this.postService.findAll();
  }

  @Query('post')
  async findById(@Args('id') id: Types.ObjectId) {
    return await this.postService.findById(id);
  }

  @ResolveProperty('section')
  async section(@Parent() post: Post) {
    return await this.sectionService.findById(post.section);
  }

  @Mutation()
  async createPost(post: CreatePostDto) {
    return await this.postService.create(post)
  }
}
