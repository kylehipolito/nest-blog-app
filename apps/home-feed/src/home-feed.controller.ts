import { Controller, Get, UseGuards } from '@nestjs/common';
import { HomeFeedService } from './home-feed.service';
import { CurrentUser } from '@app/common/decorators';
import { User } from '@app/common/entities';
import { JwtAuthGuard } from '@app/common/guards';

@Controller('home-feed')
export class HomeFeedController {
  constructor(private readonly homeFeedService: HomeFeedService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  getHomeFeed(@CurrentUser() user: User) {
    return this.homeFeedService.getHomeFeed(user.id);
  }
}
