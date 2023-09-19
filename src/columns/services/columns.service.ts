import { Inject, Injectable } from '@nestjs/common';
import { CreateColumnDto } from 'columns/dto/create-column.dto';
import { Column } from 'columns/entities/column.entity';
import { IColumnsRepo } from 'columns/repos/columns.repo.interface';
import { Table } from 'tables/entities/table.entity';
import { IColumnsService } from './columns.service.interface';

@Injectable()
export class ColumnsService implements IColumnsService {
	constructor(@Inject(IColumnsRepo) private readonly columnsRepo: IColumnsRepo) {}

	async create(table: Table, createColumnDto: CreateColumnDto): Promise<Column> {
		const column = new Column();
		column.name = createColumnDto.name;
		column.table = table;

		return this.columnsRepo.create(column);
	}
}
