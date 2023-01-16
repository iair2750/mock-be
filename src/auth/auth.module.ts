import { Module } from '@nestjs/common';
import { UsersModule } from 'users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './services/auth.service';
import { IAuthService } from './services/auth.service.interface';
import { AuthController } from './auth.controller';
import { getJwtSecret } from './utils/jwt';
import { LocalAuthStrategy } from './guards/local-auth.strategy';
import { JwtAuthStrategy } from './guards/jwt-auth.strategy';

const authService = { provide: IAuthService, useClass: AuthService };

@Module({
	imports: [
		UsersModule,
		JwtModule.register({
			secret: getJwtSecret()
		})
	],
	controllers: [AuthController],
	providers: [authService, LocalAuthStrategy, JwtAuthStrategy]
})
export class AuthModule {}
