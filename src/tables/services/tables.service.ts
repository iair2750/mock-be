import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { ISchemasService } from 'schemas/services/schemas.service.interface';
import { CreateTableDto } from 'tables/dto/create-table.dto';
import { Table } from 'tables/entities/table.entity';
import { ITablesRepo } from 'tables/repos/tables.repo.interface';
import { ITablesService } from './tables.service.interface';

@Injectable()
export class TablesService implements ITablesService {
  constructor(
    @Inject(ITablesRepo) private readonly tablesRepo: ITablesRepo,
    @Inject(ISchemasService) private readonly schemasRepo: ISchemasService
  ) {}

  async create(schemaId: string, createTableDto: CreateTableDto): Promise<Table> {
    const schema = await this.schemasRepo.findOne({ id: schemaId });
    if (!schema) {
      throw new NotFoundException('Schema not found');
    }

    const table = new Table();
    table.name = createTableDto.name;
    table.schema = schema;

    return this.tablesRepo.create(table);
  }
}
