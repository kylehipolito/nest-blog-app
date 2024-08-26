import { IsUUID } from 'class-validator';

export class FollowDto {
  @IsUUID()
  followerId: string;

  @IsUUID()
  followeeId: string;
}
