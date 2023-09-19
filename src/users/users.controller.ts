import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
  Request,
  UnauthorizedException
} from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { IUsersService } from './services/users.service.interface';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(@Inject(IUsersService) private readonly usersService: IUsersService) {}

  @ApiCreatedResponse({ type: UserResponseDto })
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserResponseDto> {
    const user = await this.usersService.create(createUserDto);
    return UserResponseDto.getFromUser(user);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async findMe(@Request() req): Promise<UserResponseDto> {
    if (!req?.user?.userId) {
      throw new UnauthorizedException();
    }
    const user = await this.usersService.findOne({ id: req.user.userId });
    return UserResponseDto.getFromUser(user);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponseDto> {
    const user = await this.usersService.findOne({ id });
    return UserResponseDto.getFromUser(user);
  }

  @Get()
  async findAll(): Promise<UserResponseDto[]> {
    const users = await this.usersService.findAll();
    return users.map(UserResponseDto.getFromUser);
  }
}
