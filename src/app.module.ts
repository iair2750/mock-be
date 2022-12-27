import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from 'config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [UsersModule, AuthModule, TypeOrmModule.forRoot(postgresConfig.getConfig())],
	controllers: [],
	providers: []
})
export class AppModule {}
