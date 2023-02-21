import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from 'config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SchemasModule } from './schemas/schemas.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(postgresConfig.getConfig()),
		UsersModule,
		AuthModule,
		SchemasModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
