import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Inject,
  UseGuards,
  Request,
  UnauthorizedException
} from '@nestjs/common';
import { JwtAuthGuard } from 'auth/guards/jwt-auth.passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SchemaResponseDto } from './dto/schema-response.dto';
import { CreateSchemaDto } from './dto/create-schema.dto';
import { ISchemasService } from './services/schemas.service.interface';

@ApiTags('Schemas')
@Controller('schemas')
export class SchemasController {
  constructor(@Inject(ISchemasService) private readonly schemasService: ISchemasService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body() createSchemaDto: CreateSchemaDto) {
    const userId: string = req?.user?.userId;
    if (!userId) {
      throw new UnauthorizedException();
    }
    const schema = await this.schemasService.create(userId, createSchemaDto);
    return SchemaResponseDto.getFromSchema(schema);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/user/me')
  async findMySchemas(@Request() req) {
    const userId: string = req?.user?.userId;
    if (!userId) {
      throw new UnauthorizedException();
    }
    const schemas = await this.schemasService.find({ owner: { id: userId } });
    return schemas.map(SchemaResponseDto.getFromSchema);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/user/:userId')
  async findUserSchemas(@Param('userId') userId: string) {
    const schemas = await this.schemasService.find({ owner: { id: userId } });
    return schemas.map(SchemaResponseDto.getFromSchema);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const schema = await this.schemasService.findOne({ id });
    return SchemaResponseDto.getFromSchema(schema);
  }
}
