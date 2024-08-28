import { PrismaService } from '@app/common/database';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeFeedService {
  constructor(private readonly prisma: PrismaService) {}

  async getHomeFeed(userId: string) {
    return this.prisma.blog.findMany({
      where: {
        author: {
          followers: {
            every: { followerId: userId },
          },
        },
      },
    });
  }
}
