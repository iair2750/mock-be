import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from 'users/entities/user.entity';
import { IDBConfigService } from './db-config.service.interface';

dotenv.config();

class PostgresConfigService implements IDBConfigService {
	private readonly env: NodeJS.ProcessEnv;
	constructor() {
		dotenv.config();
		this.env = process.env;
	}

	private getValue(key: string): string {
		const value = this.env[key];
		if (!value) {
			throw new Error(`config error - missing env.${key}`);
		}
		return value;
	}

	private getPort(): number {
		const key = 'POSTGRES_PORT';
		const port = parseInt(this.getValue(key));
		if (!port) {
			throw new Error(`config error - int is required for env.${key}`);
		}
		return port;
	}

	public getConfig(): TypeOrmModuleOptions {
		const host = this.getValue('POSTGRES_HOST');
		const port = this.getPort();
		const username = this.getValue('POSTGRES_USER');
		const password = this.getValue('POSTGRES_PASSWORD');
		const database = this.getValue('POSTGRES_DATABASE');

		return {
			type: 'postgres',
			host,
			port,
			username,
			password,
			database,

			entities: [User],
			synchronize: true
			// entities: ['**/*.entity{.ts,.js}']
		};
	}
}

export const postgresConfig: IDBConfigService = new PostgresConfigService();
