import { FindOptionsWhere } from 'typeorm';
import { User } from 'users/entities/user.entity';

export interface IUsersRepo {
	findAll: () => Promise<User[]>;
	findOne: (where: FindOptionsWhere<User>) => Promise<User | null>;
	create: (user: User) => Promise<User>;
}

export const IUsersRepo = Symbol('IUsersRepo');
