import { Column } from 'columns/entities/column.entity';

export interface IColumnsRepo {
  // findOne: (where: FindOptionsWhere<Schema>) => Promise<Schema | null>;
  create: (column: Column) => Promise<Column>;
  // find: (where: FindOptionsWhere<Schema>) => Promise<Schema[]>;
}

export const IColumnsRepo = Symbol('IColumnsRepo');
