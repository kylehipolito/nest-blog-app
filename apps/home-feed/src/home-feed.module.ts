import { Module } from '@nestjs/common';
import { HomeFeedController } from './home-feed.controller';
import { HomeFeedService } from './home-feed.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerModule } from '@app/common/logger';
import { PrismaService } from '@app/common/database';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE } from '@app/common/constants';

import * as joi from 'joi';

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
  controllers: [HomeFeedController],
  providers: [HomeFeedService, PrismaService],
})
export class HomeFeedModule {}
