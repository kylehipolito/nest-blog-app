import { IsUUID } from 'class-validator';

export class UnfollowDto {
  @IsUUID()
  follower: string;

  @IsUUID()
  followee: string;
}
