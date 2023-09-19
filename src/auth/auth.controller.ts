import { Controller, Post, UseGuards, Request, Inject } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserResponseDto } from 'users/dto/user-response.dto';
import { LocalAuthGuard } from './guards/local-auth.passport';
import { IAuthService } from './services/auth.service.interface';

@ApiTags('Account')
@Controller('account')
export class AuthController {
	constructor(@Inject(IAuthService) private readonly authService: IAuthService) {}

	@ApiBody({ schema: { title: 'Login', example: { username: 'string', password: 'string' } } })
	@UseGuards(LocalAuthGuard)
	@Post('login')
	async login(@Request() req) {
		const user = req.user as UserResponseDto;
		const token = await this.authService.login(user);
		return { user, token };
	}
}
