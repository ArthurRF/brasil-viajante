import { ObjectType, Field } from 'type-graphql';

import { UserType } from '../entities/UserType';

@ObjectType()
export default class LoginResponse {
  @Field()
  user: UserType;

  @Field()
  accessToken: string;

  @Field()
  refreshToken?: string;
}