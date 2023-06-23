import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './app.datasource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/todo/api');

  await AppDataSource.initialize()
    .then(() => console.log('LOG [Typeorm] Success connection'))
    .catch(error => console.log(error));

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
