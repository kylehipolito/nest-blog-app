import { IsUUID } from 'class-validator';

export class CreateFollowDto {
  @IsUUID()
  follower: string;

  @IsUUID()
  followee: string;
}
