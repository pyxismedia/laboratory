import { Query, Resolver, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { Types } from 'mongoose';
import { PostService } from './post.service';
import { SectionService } from '../section/section.service';

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
  async section(@Parent() post) {
    return await this.sectionService.findById(post.section);
  }
}
