import { Controller, Inject } from '@nestjs/common';
import { TablesService } from './services/tables.service';
import { ITablesService } from './services/tables.service.interface';

@Controller('tables')
export class TablesController {
	constructor(@Inject(ITablesService) private readonly schemasService: TablesService) {}

	// @Post()
	// create(@Body() createTableDto: CreateTableDto) {
	// 	return this.tablesService.create(createTableDto);
	// }

	// @Get()
	// findAll() {
	// 	return this.tablesService.findAll();
	// }

	// @Get(':id')
	// findOne(@Param('id') id: string) {
	// 	return this.tablesService.findOne(+id);
	// }

	// @Patch(':id')
	// update(@Param('id') id: string, @Body() updateTableDto: UpdateTableDto) {
	// 	return this.tablesService.update(+id, updateTableDto);
	// }

	// @Delete(':id')
	// remove(@Param('id') id: string) {
	// 	return this.tablesService.remove(+id);
	// }
}
