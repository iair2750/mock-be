import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSchemaDto {
	@ApiProperty()
	@IsNotEmpty()
	@IsString()
	name: string;
}
