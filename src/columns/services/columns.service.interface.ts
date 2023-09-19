import { CreateColumnDto } from 'columns/dto/create-column.dto';
import { Column } from 'columns/entities/column.entity';
import { Table } from 'tables/entities/table.entity';

export interface ColumnFindProps {
  id?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IColumnsService {
  create: (table: Table, createColumnDto: CreateColumnDto) => Promise<Column>;
  // findOne: (find: SchemaFindProps) => Promise<Schema>;
  // find: (find: SchemaFindProps) => Promise<Schema[]>;
}

export const IColumnsService = Symbol('IColumnsService');
