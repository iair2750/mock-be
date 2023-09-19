import { Schema } from 'schemas/entities/schema.entity';
import { UserResponseDto } from 'users/dto/user-response.dto';

export class SchemaResponseDto {
  id: string;
  name: string;
  createdDateTime: Date;
  owner: UserResponseDto;

  constructor(schema: SchemaResponseDto) {
    this.id = schema.id;
    this.name = schema.name;
    this.createdDateTime = schema.createdDateTime;
    this.owner = schema.owner;
  }

  static getFromSchema(schema: Schema): SchemaResponseDto {
    return new SchemaResponseDto({
      id: schema.id,
      name: schema.name,
      createdDateTime: schema.createdDateTime,
      owner: UserResponseDto.getFromUser(schema.owner)
    });
  }
}
