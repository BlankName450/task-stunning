import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('Starting NestJS application...');
  console.log('Environment variables:', {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV
  });
  
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  
  const port = process.env.PORT ?? 4000;
  console.log(`Application starting on port ${port}...`);
  
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
  console.log(`Health check available at: http://localhost:${port}/health`);
}
bootstrap();
