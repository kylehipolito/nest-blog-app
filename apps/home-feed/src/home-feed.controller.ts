import { Controller, Get } from '@nestjs/common';
import { HomeFeedService } from './home-feed.service';

@Controller('home-feed')
export class HomeFeedController {
  constructor(private readonly homeFeedService: HomeFeedService) {}

  @Get()
  getHomeFeed(): string {
    return this.homeFeedService.getHello();
  }
}
