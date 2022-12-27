import { Module } from '@nestjs/common';
import { UsersRepo } from './repos/users.repo';
import { IUsersRepo } from './repos/users.repo.interface';
import { UsersService } from './services/users.service';
import { IUsersService } from './services/users.service.interface';
import { UsersController } from './users.controller';

const usersService = { provide: IUsersService, useClass: UsersService };
const usersRepo = { provide: IUsersRepo, useClass: UsersRepo };

@Module({
	controllers: [UsersController],
	providers: [usersService, usersRepo],
	exports: [usersService]
})
export class UsersModule {}
