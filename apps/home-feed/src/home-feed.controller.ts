import { Controller, Get, Query } from '@nestjs/common';
import { HomeFeedService } from './home-feed.service';

@Controller('home-feed')
export class HomeFeedController {
  constructor(private readonly homeFeedService: HomeFeedService) {}

  @Get()
  getHomeFeed(@Query('userId') userId: string) {
    return this.homeFeedService.getHomeFeed(userId);
  }
}
