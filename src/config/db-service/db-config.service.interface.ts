import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export interface IDBConfigService {
	getConfig: () => TypeOrmModuleOptions;
}
