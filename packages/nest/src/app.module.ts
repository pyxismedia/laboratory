import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    PostsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      include: [PostsModule],
    }),
    MongooseModule.forRoot('mongodb://localhost/pyxis'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
