import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@app/common/database';
import { LoggerModule } from '@app/common/logger';

import * as joi from 'joi';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        PORT: joi.string().required(),
        DATABASE_URL: joi.string().required(),
      }),
    }),
  ],
  controllers: [FollowController],
  providers: [FollowService, PrismaService],
})
export class FollowModule {}
