import { PrismaService } from '@app/common/database';
import { Injectable } from '@nestjs/common';
import { FollowDto } from './dto/follow.dto';
import { UnfollowDto } from './dto/unfollow-dto';

@Injectable()
export class FollowService {
  constructor(private readonly prisma: PrismaService) {}

  async follow(followDto: FollowDto) {
    return this.prisma.follow.create({ data: followDto });
  }

  async unfollow(unfollowDto: UnfollowDto) {
    return this.prisma.follow.delete({
      where: {
        followerId_followeeId: unfollowDto,
      },
    });
  }

  async findFollowers(userId: string) {
    return this.prisma.follow.findMany({
      where: { followeeId: userId },
      include: {
        follower: true,
      },
    });
  }

  async findFollowing(userId: string) {
    return this.prisma.follow.findMany({
      where: { followerId: userId },
      include: {
        followee: true,
      },
    });
  }
}
