import { Module } from '@nestjs/common';
import { ColumnsController } from './columns.controller';
import { IColumnsService } from './services/columns.service.interface';
import { ColumnsRepo } from './repos/columns.repo';
import { IColumnsRepo } from './repos/columns.repo.interface';
import { ColumnsService } from './services/columns.service';

const columnsService = { provide: IColumnsService, useClass: ColumnsService };
const columnsRepo = { provide: IColumnsRepo, useClass: ColumnsRepo };

@Module({
	controllers: [ColumnsController],
	providers: [columnsService, columnsRepo],
	exports: [columnsService]
})
export class ColumnsModule {}
