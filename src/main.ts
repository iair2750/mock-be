import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { appConfig } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, appConfig.getOptions());
  app.useGlobalPipes(new ValidationPipe({}));

  const config = new DocumentBuilder()
    .setTitle('Mock my data')
    .setDescription('The mock API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(appConfig.getPort());
  console.log(`App listening on port ${appConfig.getPort()}`);
}
bootstrap();
