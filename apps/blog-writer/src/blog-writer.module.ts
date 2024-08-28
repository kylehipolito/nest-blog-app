import { Module } from '@nestjs/common';
import { BlogWriterController } from './blog-writer.controller';
import { BlogWriterService } from './blog-writer.service';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';
import { LoggerModule } from '@app/common/logger';

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
  providers: [BlogWriterService],
})
export class BlogWriterModule {}
