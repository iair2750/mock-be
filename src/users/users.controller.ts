import {
	Body,
	Controller,
	Get,
	Inject,
	Param,
	Post,
	UseGuards,
	Request,
	UnauthorizedException
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.passport';
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

	@UseGuards(JwtAuthGuard)
	@Get('me')
	async findMe(@Request() req): Promise<any> {
		if (!req?.user?.userId) {
			throw new UnauthorizedException();
		}
		const user = await this.usersService.findOne({ id: req.user.userId });
		return user;
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
