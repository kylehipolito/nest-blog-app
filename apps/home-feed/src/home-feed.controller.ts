import { Controller, Get } from '@nestjs/common';
import { HomeFeedService } from './home-feed.service';

@Controller()
export class HomeFeedController {
  constructor(private readonly homeFeedService: HomeFeedService) {}

  @Get()
  getHello(): string {
    return this.homeFeedService.getHello();
  }
}
