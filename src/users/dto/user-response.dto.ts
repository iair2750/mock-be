import { User } from 'users/entities/user.entity';

export class UserResponseDto {
	id: string;
	createdDateTime?: Date;
	firstName?: string;
	lastName?: string;
	email: string;
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
