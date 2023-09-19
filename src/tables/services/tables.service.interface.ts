import { CreateTableDto } from 'tables/dto/create-table.dto';
import { Table } from 'tables/entities/table.entity';

export interface ITablesService {
  create: (schemaId: string, createTableDto: CreateTableDto) => Promise<Table>;
  // findOne: (find: SchemaFindProps) => Promise<Schema>;
  // find: (find: SchemaFindProps) => Promise<Schema[]>;
}

export const ITablesService = Symbol('ITablesService');
