import { Controller, Post } from '@nestjs/common';
import { FollowService } from './follow.service';

@Controller()
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post('follow')
  async follow() {
    return this.followService.getHello();
  }

  @Post('unfollow')
  async unfollow() {
    return this.followService.getHello();
  }
}
