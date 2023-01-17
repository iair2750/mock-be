import { Application } from 'applications/entities/application.entity';
import { FindOptionsWhere } from 'typeorm';

export interface IApplicationsRepo {
	findOne: (where: FindOptionsWhere<Application>) => Promise<Application | null>;
	create: (user: Application) => Promise<Application>;
}

export const IApplicationsRepo = Symbol('IApplicationsRepo');
