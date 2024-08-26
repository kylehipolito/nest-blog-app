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
        follower_followee: unfollowDto,
      },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
