import { Inject, Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { IUsersRepo } from 'users/repos/users.repo.interface';
import * as bcrypt from 'bcryptjs';
import * as config from 'config/config.json';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { IUsersService, UserFindOneProps } from './users.service.interface';

@Injectable()
export class UsersService implements IUsersService {
	constructor(@Inject(IUsersRepo) private readonly usersRepo: IUsersRepo) {}

	async create(createUserDto: CreateUserDto) {
		const user = await this.usersRepo.findOne({ email: createUserDto.email });
		if (user) {
			throw new BadRequestException('This email is already in use');
		}
		const newUser = new User();
		newUser.firstName = createUserDto.firstName;
		newUser.lastName = createUserDto.lastName;
		newUser.email = createUserDto.email;
		newUser.password = await bcrypt.hash(createUserDto.password ?? '', config.bcrypt.salt);
		newUser.username = createUserDto.username;
		return this.usersRepo.create(newUser);
	}

	async findOne(find: UserFindOneProps): Promise<User> {
		const user = await this.usersRepo.findOne(find);
		if (!user) {
			throw new NotFoundException();
		}
		return user;
	}

	async findAll(): Promise<User[]> {
		return this.usersRepo.findAll();
	}
}
