import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  await app.init();
  const config = await app.get<ConfigService>(ConfigService);
  const port = config.get('API_PORT');
  await app.listen(Number(port));
  logger.log(`Application is running on: ${port}`);
}
bootstrap();
