import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { IUsersService } from './services/users.service.interface';

@Controller('users')
export class UsersController {
	constructor(@Inject(IUsersService) private readonly usersService: IUsersService) {}

	@Post()
	async create(@Body() createUserDto: CreateUserDto) {
		const user = await this.usersService.create(createUserDto);
		return UserResponseDto.getFromUser(user);
	}

	@Get(':id')
	async findOne(@Param('id') id: string): Promise<UserResponseDto> {
		const user = await this.usersService.findOne({ id });
		return UserResponseDto.getFromUser(user);
	}

	@Get()
	async findAll(): Promise<UserResponseDto[]> {
		const users = await this.usersService.findAll();
		return users.map(UserResponseDto.getFromUser);
	}
}
