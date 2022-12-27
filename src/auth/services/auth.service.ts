import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { IUsersService } from 'users/services/users.service.interface';
import * as bcrypt from 'bcryptjs';
import { User } from 'users/entities/user.entity';
import { UserResponseDto } from 'users/dto/user-response.dto';
import { JwtService } from '@nestjs/jwt';
import * as config from 'config/config.json';
import { IAuthService } from './auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
	constructor(
		@Inject(IUsersService) private readonly usersService: IUsersService,
		private readonly jwtService: JwtService
	) {}

	async login(user: UserResponseDto): Promise<unknown> {
		const token = this.jwtService.sign(
			{
				id: user.id,
				createdDateTime: user.createdDateTime,
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				username: user.username
			},
			{
				expiresIn: config.jwt.expiredIn
			}
		);
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
