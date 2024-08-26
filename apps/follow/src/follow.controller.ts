import { Body, Controller, Get, Post } from '@nestjs/common';
import { FollowService } from './follow.service';
import { CreateFollowDto } from './dto/create-follow.dto';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post('follow')
  async follow(@Body() payload: CreateFollowDto) {
    return this.followService.createFollow(payload);
  }

  @Post('unfollow')
  async unfollow() {
    return this.followService.getHello();
  }

  @Get('/followers')
  async getFollowers() {}

  @Get('/followees')
  async getFollowees() {}
}
