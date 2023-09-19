import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from 'auth/services/auth.service.interface';
import { UserResponseDto } from 'users/dto/user-response.dto';

@Injectable()
export class LocalAuthStrategy extends PassportStrategy(Strategy) {
	constructor(@Inject(IAuthService) private readonly authService: IAuthService) {
		super();
	}

	async validate(username: string, password: string): Promise<unknown> {
		const user = await this.authService.validateUser(username, password);
		return UserResponseDto.getFromUser(user);
	}
}
