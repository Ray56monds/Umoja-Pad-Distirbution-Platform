import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinstonModule } from 'nest-winston';
import { loggerConfig } from './logger';
import { PrismaService } from './prisma/prisma.service';
import { setupSwagger } from './config/swagger.config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationExceptionFilter } from './common/filters/validation-exception.filter';
import { RateLimiterMiddleware } from './common/middleware/rate-limiter.middleware';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';

dotenv.config();

async function bootstrap() {
  // Create the Nest application
  const app = await NestFactory.create(AppModule, {
    // Configure the application logger
    logger: WinstonModule.createLogger(loggerConfig),
  });

  // Use security headers with Helmet
  app.use(helmet());

  // Apply rate limiting middleware
  app.use(new RateLimiterMiddleware().use);

  // Apply global exception filters
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalFilters(new ValidationExceptionFilter());

  // Enable Prisma shutdown hooks
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Setup Swagger documentation
  setupSwagger(app);

  // Start the application
  await app.listen(3000);
}
bootstrap();
