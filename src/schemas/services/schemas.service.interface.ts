import { CreateSchemaDto } from 'schemas/dto/create-schema.dto';
import { Schema } from 'schemas/entities/schema.entity';
import { FindOptionsWhere } from 'typeorm';
import { User } from 'users/entities/user.entity';

export interface SchemaFindProps {
  id?: string;
  owner?: FindOptionsWhere<User>;
}

export interface ISchemasService {
  create: (ownerId: string, createSchemaDto: CreateSchemaDto) => Promise<Schema>;
  findOne: (find: SchemaFindProps) => Promise<Schema>;
  find: (find: SchemaFindProps) => Promise<Schema[]>;
}

export const ISchemasService = Symbol('ISchemasService');
