import { Module } from '@nestjs/common';
import { BlogWriterController } from './blog-writer.controller';
import { BlogWriterService } from './blog-writer.service';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/common/logger';
import { PrismaService } from '@app/common/database';

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
  controllers: [BlogWriterController],
  providers: [BlogWriterService, PrismaService],
})
export class BlogWriterModule {}
