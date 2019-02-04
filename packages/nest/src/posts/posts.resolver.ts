import { Args, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(
    private readonly postService: PostsService,
  ) {}

  @Query()
  async posts() {
    return await this.postService.findAll();
  }
}
