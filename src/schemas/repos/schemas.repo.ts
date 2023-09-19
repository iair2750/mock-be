import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Schema } from 'schemas/entities/schema.entity';
import { FindOptionsWhere } from 'typeorm';
import { ISchemasRepo } from './schemas.repo.interface';

@Injectable()
export class SchemasRepo implements ISchemasRepo {
	async findOne(where: FindOptionsWhere<Schema>): Promise<Schema | null> {
<<<<<<< HEAD
		return Schema.findOne({ where, relations: ['owner', 'tables'] });
=======
		return Schema.findOne({ where, relations: ['owner'] });
>>>>>>> feat/add-tables
	}

	async create(schema: Schema): Promise<Schema> {
		return schema.save();
	}

	async find(where: FindOptionsWhere<Schema>): Promise<Schema[]> {
<<<<<<< HEAD
		return Schema.find({ where, relations: ['owner', 'tables'] });
=======
		return Schema.find({ where, relations: ['owner'] });
>>>>>>> feat/add-tables
	}
}
