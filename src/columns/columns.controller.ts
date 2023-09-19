import { Controller, Inject } from '@nestjs/common';
import { IColumnsService } from './services/columns.service.interface';

@Controller('columns')
export class ColumnsController {
	constructor(@Inject(IColumnsService) private readonly columnsService: IColumnsService) {}
}
