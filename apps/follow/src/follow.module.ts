import { Module } from '@nestjs/common';
import { FollowController } from './follow.controller';
import { FollowService } from './follow.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from '@app/common/database';
import * as joi from 'joi';

@Module({
  imports: [
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
