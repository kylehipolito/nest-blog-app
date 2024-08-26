import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowDto } from './dto/follow.dto';
import { UnfollowDto } from './dto/unfollow-dto';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post('follow')
  async follow(@Body() payload: FollowDto) {
    return this.followService.follow(payload);
  }

  @Post('unfollow')
  async unfollow(@Body() payload: UnfollowDto) {
    return this.followService.unfollow(payload);
  }

  @Get('/followers')
  async getFollowers(@Query('userId') userId: string) {
    return this.followService.findFollowers(userId);
  }

  @Get('/following')
  async getFollowing(@Query('userId') userId: string) {
    return this.followService.findFollowing(userId);
  }
}
