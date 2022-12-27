import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
	@IsOptional()
	@IsString()
	username?: string;

	@IsOptional()
	@IsString()
	firstName?: string;

	@IsOptional()
	@IsString()
	lastName?: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString()
	@MinLength(6)
	password: string;
}
