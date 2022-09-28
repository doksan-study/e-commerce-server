import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 전역변수로 setting한 errorcode를 선언
  app.useGlobalFilters(new HttpExceptionFilter());

  // const PORT = process.env.PORT;
  const PORT = 7700;

  await app.listen(PORT, () => {
    console.log(`running on ${PORT}...`);
  });
}
bootstrap();
