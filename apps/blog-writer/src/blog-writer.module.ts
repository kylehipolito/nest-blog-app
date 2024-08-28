import { Module } from '@nestjs/common';
import { BlogWriterController } from './blog-writer.controller';
import { BlogWriterService } from './blog-writer.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from '@app/common/logger';
import { PrismaService } from '@app/common/database';
import { ClientsModule, Transport } from '@nestjs/microservices';

import * as joi from 'joi';
import { AUTH_SERVICE } from '@app/common/constants';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        PORT: joi.string().required(),
        DATABASE_URL: joi.string().required(),
        AUTH_HOST: joi.string().required(),
        AUTH_PORT: joi.string().required(),
      }),
    }),
    ClientsModule.registerAsync([
      {
        name: AUTH_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('AUTH_HOST'),
            port: configService.get('AUTH_PORT'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [BlogWriterController],
  providers: [BlogWriterService, PrismaService],
})
export class BlogWriterModule {}
