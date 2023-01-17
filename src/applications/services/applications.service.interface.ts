import { CreateApplicationDto } from 'applications/dto/create-application.dto';
import { Application } from 'applications/entities/application.entity';

export interface ApplicationFindOneProps {
	id?: string;
	email?: string;
	username?: string;
}

export interface IApplicationsService {
	create: (createApplicationDto: CreateApplicationDto) => Promise<Application>;
	findOne: (find: ApplicationFindOneProps) => Promise<Application>;
}

export const IApplicationsService = Symbol('IApplicationsService');
