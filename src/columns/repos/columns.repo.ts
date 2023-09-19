import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Column } from 'columns/entities/column.entity';
import { IColumnsRepo } from './columns.repo.interface';

@Injectable()
export class ColumnsRepo implements IColumnsRepo {
  // async findOne(where: FindOptionsWhere<Column>): Promise<Column | null> {
  // 	return Column.findOne({ where, relations: ['owner', 'tables'] });
  // }
  async create(column: Column): Promise<Column> {
    return column.save();
  }
  // async find(where: FindOptionsWhere<Schema>): Promise<Schema[]> {
  // 	return Schema.find({ where, relations: ['owner', 'tables'] });
  // }
}
