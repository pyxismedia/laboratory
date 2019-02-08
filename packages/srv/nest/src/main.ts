import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // TODO: from dotenv, should access service from nest
  await app.listen(process.env.PORT || 4000);
}

bootstrap();
