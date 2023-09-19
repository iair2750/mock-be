import { Table } from 'tables/entities/table.entity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ITablesRepo {
	// findOne: (where: FindOptionsWhere<Schema>) => Promise<Schema | null>;
	create: (table: Table) => Promise<Table>;
	// find: (where: FindOptionsWhere<Schema>) => Promise<Schema[]>;
}

export const ITablesRepo = Symbol('ITablesRepo');
