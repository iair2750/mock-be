import { Module } from '@nestjs/common';
import { UsersModule } from 'users/users.module';
import { ApplicationsService } from './services/applications.service';
import { IApplicationsService } from './services/applications.service.interface';
import { ApplicationsRepo } from './repos/applications.repo';
import { IApplicationsRepo } from './repos/applications.repo.interface';
import { ApplicationsController } from './applications.controller';

const applicationsService = { provide: IApplicationsService, useClass: ApplicationsService };
const applicationsRepo = { provide: IApplicationsRepo, useClass: ApplicationsRepo };

@Module({
	imports: [UsersModule],
	controllers: [ApplicationsController],
	providers: [applicationsService, applicationsRepo],
	exports: [applicationsService]
})
export class ApplicationsModule {}
