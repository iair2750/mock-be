import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Schema } from 'schemas/entities/schema.entity';
import { FindOptionsWhere } from 'typeorm';
import { ISchemasRepo } from './schemas.repo.interface';

@Injectable()
export class SchemasRepo implements ISchemasRepo {
	async findOne(where: FindOptionsWhere<Schema>): Promise<Schema | null> {
		return Schema.findOne({ where, relations: ['owner'] });
	}

	async create(schema: Schema): Promise<Schema> {
		return schema.save();
	}

	async find(where: FindOptionsWhere<Schema>): Promise<Schema[]> {
		return Schema.find({ where, relations: ['owner'] });
	}
}
