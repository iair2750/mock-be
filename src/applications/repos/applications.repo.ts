import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Application } from 'applications/entities/application.entity';
import { FindOptionsWhere } from 'typeorm';
import { IApplicationsRepo } from './applications.repo.interface';

@Injectable()
export class ApplicationsRepo implements IApplicationsRepo {
	async findOne(where: FindOptionsWhere<Application>): Promise<Application | null> {
		return Application.findOne({ where });
	}

	async create(application: Application): Promise<Application> {
		return application.save();
	}
}
