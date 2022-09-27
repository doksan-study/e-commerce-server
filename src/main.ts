import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const PORT = process.env.PORT;
  const PORT = 7700;

  await app.listen(PORT, () => {
    console.log(`running on ${PORT}...`);
  });
}
bootstrap();
