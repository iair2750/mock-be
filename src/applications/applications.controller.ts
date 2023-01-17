import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ApplicationResponseDto } from './dto/application-response.dto';
import { CreateApplicationDto } from './dto/create-application.dto';
import { IApplicationsService } from './services/applications.service.interface';

@Controller('applications')
export class ApplicationsController {
	constructor(
		@Inject(IApplicationsService) private readonly applicationsService: IApplicationsService
	) {}

	@Post()
	async create(@Body() createApplicationDto: CreateApplicationDto) {
		const app = await this.applicationsService.create(createApplicationDto);
		return ApplicationResponseDto.getFromApplication(app);
	}

	@Get(':id')
	async findOne(@Param('id') id: string) {
		const app = await this.applicationsService.findOne({ id });
		return ApplicationResponseDto.getFromApplication(app);
	}
}
