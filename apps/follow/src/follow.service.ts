import { PrismaService } from '@app/common/database';
import { Injectable } from '@nestjs/common';
import { CreateFollowDto } from './dto/create-follow.dto';

@Injectable()
export class FollowService {
  constructor(private readonly prisma: PrismaService) {}

  async createFollow(follow: CreateFollowDto) {
    return this.prisma.follow.create({ data: follow });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
