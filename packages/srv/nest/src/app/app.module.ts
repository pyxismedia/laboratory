import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from '../posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { I18nModule } from '../i18n/i18n.module';
import { ConfigModule } from '../config/config.module';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module'

@Module({
  imports: [
    I18nModule,
    PostsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      include: [PostsModule, UsersModule],
      context: ({ req }) => ({
        request: req,
      }),
    }),
    ConfigModule,
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [I18nModule]
})
export class AppModule {}
