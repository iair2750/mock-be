import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IUsersService } from 'users/services/users.service.interface';
import * as bcrypt from 'bcryptjs';
import { User } from 'users/entities/user.entity';
import { UserResponseDto } from 'users/dto/user-response.dto';
import { JwtService } from '@nestjs/jwt';
import * as config from 'config/config.json';
import { JwtPayload } from 'auth/utils/types';
import { IAuthService } from './auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(IUsersService) private readonly usersService: IUsersService,
    private readonly jwtService: JwtService
  ) {}

  async login(user: UserResponseDto): Promise<unknown> {
    const payload: JwtPayload = {
      userId: user.id,
      userCreatedDateTime: user.createdDateTime?.toString(),
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userEmail: user.email,
      userUsername: user.username
    };

    const token = this.jwtService.sign(payload, {
      expiresIn: config.jwt.expiredIn
    });

    return token;
  }

  async validateUser(username: string, password: string): Promise<User> {
    let user: User;
    try {
      if (username.includes('@')) {
        user = await this.usersService.findOne({ email: username });
      } else {
        user = await this.usersService.findOne({ username });
      }
    } catch (err) {
      throw new UnauthorizedException();
    }
    const isPassValid = await bcrypt.compare(password, user.password);
    if (!isPassValid) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
