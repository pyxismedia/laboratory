import { Document, Types } from 'mongoose';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserCreate {
  constructor(
    forname: string,
    surname: string,
    email: string,
    password: string,
  ) {
    this.forname = forname;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }

  @ApiModelProperty()
  readonly forname: string;

  @ApiModelProperty()
  readonly surname: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;
}

export class UserModel {
  constructor(
    public _id: any = Types.ObjectId(),
    public forname: string,
    public surname: string,
    public email: string,
    public password: string,
  ) {}
}

export interface User extends Document, UserModel {}

export const USER_MODEL = 'User';
