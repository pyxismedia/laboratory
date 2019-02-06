import { Module } from '@nestjs/common';
import { PostService } from './post/post.service';
import { PostResolver } from './post/post.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './post/post.schema';
import { SectionService } from './section/section.service';
import { SectionSchema } from './section/section.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Post', schema: PostSchema },
      { name: 'Section', schema: SectionSchema },
    ]),
  ],
  providers: [
    PostService,
    PostResolver,
    SectionService,
  ],
})
export class PostsModule {}
