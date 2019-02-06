import { Test, TestingModule } from '@nestjs/testing';
import { PostResolver } from './post.resolver';

class PostsService {
  findAll() {
    return Promise.resolve();
  }
}

describe('PostsResolver', () => {
  let resolver: PostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostsService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
