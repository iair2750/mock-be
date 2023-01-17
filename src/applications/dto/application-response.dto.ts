import { Application } from 'applications/entities/application.entity';
import { UserResponseDto } from 'users/dto/user-response.dto';

export class ApplicationResponseDto {
	id: string;
	createdDateTime: Date;
	owner: UserResponseDto;

	constructor(application: ApplicationResponseDto) {
		this.id = application.id;
		this.createdDateTime = application.createdDateTime;
		this.owner = application.owner;
	}

	static getFromApplication(app: Application): ApplicationResponseDto {
		return new ApplicationResponseDto({
			id: app.id,
			createdDateTime: app.createdDateTime,
			owner: UserResponseDto.getFromUser(app.owner)
		});
	}
}
