import { IsUUID } from 'class-validator';

export class UnfollowDto {
  @IsUUID()
  followerId: string;

  @IsUUID()
  followeeId: string;
}
