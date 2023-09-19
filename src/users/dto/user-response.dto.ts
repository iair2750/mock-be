import { ApiProperty } from '@nestjs/swagger';
import { User } from 'users/entities/user.entity';

export class UserResponseDto {
	@ApiProperty()
	id: string;

	@ApiProperty()
	createdDateTime?: Date;

	@ApiProperty({ required: false })
	firstName?: string;

	@ApiProperty({ required: false })
	lastName?: string;

	@ApiProperty()
	email: string;

	@ApiProperty({ required: false })
	username?: string;

	constructor(user: UserResponseDto) {
		this.id = user.id;
		this.createdDateTime = user.createdDateTime;
		this.firstName = user.firstName;
		this.lastName = user.lastName;
		this.email = user.email;
		this.username = user.username;
	}

	static getFromUser(user: User): UserResponseDto {
		return new UserResponseDto({
			id: user.id,
			createdDateTime: user.createdDateTime,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			username: user.username
		});
	}
}
