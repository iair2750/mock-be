import { CreateUserDto } from 'users/dto/create-user.dto';
import { User } from 'users/entities/user.entity';

export interface UserFindOneProps {
  id?: string;
  email?: string;
  username?: string;
}

export interface IUsersService {
  create: (createUserDto: CreateUserDto) => Promise<User>;
  findOne: (find: UserFindOneProps) => Promise<User>;
  findAll: () => Promise<User[]>;
}

export const IUsersService = Symbol('IUsersService');
