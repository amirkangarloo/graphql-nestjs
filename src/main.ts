import { NestFactory } from '@nestjs/core';
// App Module
import { AppModule } from './app.module';
// Filters
import { EntityNotFoundFilter } from 'src/filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundFilter());
  await app.listen(3000);
}
bootstrap();
