import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Application } from 'applications/entities/application.entity';
import { IApplicationsRepo } from 'applications/repos/applications.repo.interface';
import { IUsersService } from 'users/services/users.service.interface';
import { CreateApplicationDto } from '../dto/create-application.dto';
import { ApplicationFindOneProps, IApplicationsService } from './applications.service.interface';

@Injectable()
export class ApplicationsService implements IApplicationsService {
	constructor(
		@Inject(IApplicationsRepo) private readonly applicationsRepo: IApplicationsRepo,
		@Inject(IUsersService) private readonly usersService: IUsersService
	) {}

	async create(createApplicationDto: CreateApplicationDto): Promise<Application> {
		const user = await this.usersService.findOne({ id: createApplicationDto.ownerId });
		if (!user) {
			throw new NotFoundException();
		}

		const app = new Application();
		app.owner = user;
		return this.applicationsRepo.create(app);
	}

	async findOne(find: ApplicationFindOneProps): Promise<Application> {
		const app = await this.applicationsRepo.findOne(find);
		if (!app) {
			throw new NotFoundException();
		}
		return app;
	}
}
