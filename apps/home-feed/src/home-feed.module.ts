import { Module } from '@nestjs/common';
import { HomeFeedController } from './home-feed.controller';
import { HomeFeedService } from './home-feed.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/common/logger';

import * as joi from 'joi';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        PORT: joi.string().required(),
      }),
    }),
  ],
  controllers: [HomeFeedController],
  providers: [HomeFeedService],
})
export class HomeFeedModule {}
