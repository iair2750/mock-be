import { UserResponseDto } from 'users/dto/user-response.dto';
import { User } from 'users/entities/user.entity';

export interface IAuthService {
  login: (user: UserResponseDto) => Promise<unknown>;
  validateUser: (username: string, password: string) => Promise<User>;
}

export const IAuthService = Symbol('IAuthService');
