import { Schema } from 'schemas/entities/schema.entity';
import { FindOptionsWhere } from 'typeorm';

export interface ISchemasRepo {
	findOne: (where: FindOptionsWhere<Schema>) => Promise<Schema | null>;
	create: (user: Schema) => Promise<Schema>;
	find: (where: FindOptionsWhere<Schema>) => Promise<Schema[]>;
}

export const ISchemasRepo = Symbol('ISchemasRepo');
