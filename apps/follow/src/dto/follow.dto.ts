import { IsUUID } from 'class-validator';

export class FollowDto {
  @IsUUID()
  follower: string;

  @IsUUID()
  followee: string;
}
