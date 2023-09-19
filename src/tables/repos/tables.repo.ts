import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { Table } from 'tables/entities/table.entity';
import { ITablesRepo } from './tables.repo.interface';

@Injectable()
export class TablesRepo implements ITablesRepo {
  async create(table: Table): Promise<Table> {
    return table.save();
  }
}
