import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { getJwtSecret } from 'auth/utils/jwt';
import { JwtPayload } from 'auth/utils/types';

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: getJwtSecret()
		});
	}

	async validate(payload: JwtPayload) {
		return payload;
	}
}
