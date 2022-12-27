import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { FindOptionsWhere } from 'typeorm';
import { User } from 'users/entities/user.entity';
import { IUsersRepo } from './users.repo.interface';

@Injectable()
export class UsersRepo implements IUsersRepo {
	async findAll(): Promise<User[]> {
		return User.find();
	}

	async findOne(where: FindOptionsWhere<User>): Promise<User | null> {
		return User.findOne({ where });
	}

	async create(user: User): Promise<User> {
		return user.save();
	}
}
