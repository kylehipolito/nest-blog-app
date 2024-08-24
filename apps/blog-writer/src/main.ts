import { NestFactory } from '@nestjs/core';
import { BlogWriterModule } from './blog-writer.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(BlogWriterModule);
  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(configService.get('PORT'));
}
bootstrap();
