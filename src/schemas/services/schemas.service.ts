import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { Schema } from 'schemas/entities/schema.entity';
import { ISchemasRepo } from 'schemas/repos/schemas.repo.interface';
import { IUsersService } from 'users/services/users.service.interface';
import { CreateSchemaDto } from '../dto/create-schema.dto';
import { ISchemasService, SchemaFindProps } from './schemas.service.interface';

@Injectable()
export class SchemasService implements ISchemasService {
  constructor(
    @Inject(ISchemasRepo) private readonly schemasRepo: ISchemasRepo,
    @Inject(IUsersService) private readonly usersService: IUsersService
  ) {}

  async create(ownerId: string, createSchemaDto: CreateSchemaDto): Promise<Schema> {
    const schemaByName = await this.schemasRepo.findOne({
      name: createSchemaDto.name,
      owner: { id: ownerId }
    });
    if (schemaByName) {
      throw new BadRequestException({
        errors: { name: 'You already have a schema with this name' }
      });
    }

    const user = await this.usersService.findOne({ id: ownerId });
    if (!user) {
      throw new UnauthorizedException();
    }

    const schema = new Schema();
    schema.owner = user;
    schema.name = createSchemaDto.name;
    return this.schemasRepo.create(schema);
  }

  async findOne(find: SchemaFindProps): Promise<Schema> {
    const schema = await this.schemasRepo.findOne(find);
    if (!schema) {
      throw new NotFoundException();
    }
    return schema;
  }

  async find(find: SchemaFindProps): Promise<Schema[]> {
    return this.schemasRepo.find(find);
  }
}
