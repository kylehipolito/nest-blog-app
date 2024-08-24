import { Controller, Get } from '@nestjs/common';
import { FollowService } from './follow.service';

@Controller()
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Get()
  getHello(): string {
    return this.followService.getHello();
  }
}
