import { NestFactory } from '@nestjs/core';
import { CustomerApiModule } from './customer-api.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerApiModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
