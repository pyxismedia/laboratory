import { Test, TestingModule } from '@nestjs/testing';
import { PostResolver } from './post.resolver';
import { Types } from "mongoose";
import { Section } from './post.types';

class PostService {
  findAll() {
    return Promise.resolve();
  }
}

class SectionService {
  async findById(id: Types.ObjectId): Promise<Section> {
    return await Promise.resolve({
      name: 'name',
    } as Section);
  }
}

describe('PostsResolver', () => {
  let resolver: PostResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostResolver, PostService, SectionService],
    }).compile();

    resolver = module.get<PostResolver>(PostResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
