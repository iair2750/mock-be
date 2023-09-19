import { Module } from '@nestjs/common';
import { SchemasModule } from 'schemas/schemas.module';
import { TablesRepo } from './repos/tables.repo';
import { ITablesRepo } from './repos/tables.repo.interface';
import { TablesService } from './services/tables.service';
import { ITablesService } from './services/tables.service.interface';
import { TablesController } from './tables.controller';

const tablesService = { provide: ITablesService, useClass: TablesService };
const tablesRepo = { provide: ITablesRepo, useClass: TablesRepo };

@Module({
  controllers: [TablesController],
  providers: [tablesService, tablesRepo],
  exports: [tablesService],
  imports: [SchemasModule]
})
export class TablesModule {}
