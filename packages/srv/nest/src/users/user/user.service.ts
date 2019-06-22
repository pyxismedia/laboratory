import { Injectable } from '@nestjs/common';
import { Model } from "mongoose"
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.types'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>
  ) {}

  async findAll() {
    this.userModel.find().exec().then((data) => {
      console.log('user', data);
    })
    return await this.userModel.find().exec();
  }
}
