import { Module } from '@nestjs/common';
import { UsersModule } from 'users/users.module';
import { SchemasService } from './services/schemas.service';
import { ISchemasService } from './services/schemas.service.interface';
import { SchemasRepo } from './repos/schemas.repo';
import { ISchemasRepo } from './repos/schemas.repo.interface';
import { SchemasController } from './schemas.controller';

const schemasService = { provide: ISchemasService, useClass: SchemasService };
const schemasRepo = { provide: ISchemasRepo, useClass: SchemasRepo };

@Module({
  imports: [UsersModule],
  controllers: [SchemasController],
  providers: [schemasService, schemasRepo],
  exports: [schemasService]
})
export class SchemasModule {}
