import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service'
import { User } from './user.types'

@Resolver('User')
export class UserResolver {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Query('users')
  async findAll() {
    return await this.userService.findAll();
  }
}
