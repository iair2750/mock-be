import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { appConfig } from 'config';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, appConfig.getOptions());
	app.useGlobalPipes(new ValidationPipe({}));
	await app.listen(appConfig.getPort());
	console.log(`App listening on port ${appConfig.getPort()}`);
}
bootstrap();
