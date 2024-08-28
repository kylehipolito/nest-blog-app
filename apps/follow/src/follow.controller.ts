import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FollowService } from './follow.service';
import { FollowDto } from './dto/follow.dto';
import { UnfollowDto } from './dto/unfollow-dto';
import { CurrentUser } from '@app/common/decorators';
import { User } from '@app/common/entities';
import { JwtAuthGuard } from '@app/common/guards';

@UseGuards(JwtAuthGuard)
@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post('follow')
  async follow(
    @Body() payload: Omit<FollowDto, 'followerId'>,
    @CurrentUser() user: User,
  ) {
    return this.followService.follow({
      ...payload,
      followerId: user.id,
    });
  }

  @Post('unfollow')
  async unfollow(
    @Body() payload: Omit<UnfollowDto, 'followerId'>,
    @CurrentUser() user: User,
  ) {
    return this.followService.unfollow({
      ...payload,
      followerId: user.id,
    });
  }

  @Get('/followers')
  async getFollowers(@CurrentUser() user: User) {
    return this.followService.findFollowers(user.id);
  }

  @Get('/following')
  async getFollowing(@CurrentUser() user: User) {
    return this.followService.findFollowing(user.id);
  }
}
