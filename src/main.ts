import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpErrorFilter } from './common/filters/http-exception.filter';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor';
import { envs } from './config/envs';
import { enableCookieParser } from './common/middleware/enable-cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import compression from 'compression';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // ✅ Servir la carpeta de imágenes públicas
  app.useStaticAssets(join(__dirname, '..', 'assets'), {
    prefix: '/api/assets/', // ruta pública
  });

  app.setGlobalPrefix('api');
  
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  )

  // usamos el filtro de manera globasl
  app.useGlobalFilters(new HttpErrorFilter());
  enableCookieParser(app);
  // habilitamos el cors
  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    credentials: true,
  });

  app.use(helmet());
  app.use(compression()); 
  // Usar el interceptor global para logs
  app.useGlobalInterceptors(new LoggingInterceptor());
  // Habilitar el uso de cookies

  await app.listen(envs.port || 3000);
  console.log(`Server is running on port ${envs.port || 3000}`);
}
bootstrap();
