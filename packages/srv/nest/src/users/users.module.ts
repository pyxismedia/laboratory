import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserResolver } from './user/user.resolver';
import { UserService } from './user/user.service';
import { UserSchema } from './user/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema }
    ])
  ],
  providers: [UserResolver, UserService]
})
export class UsersModule {}
