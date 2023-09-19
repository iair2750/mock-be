import { Table } from 'tables/entities/table.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column as DBColumn, ManyToOne } from 'typeorm';

@Entity()
export class Column extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DBColumn({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Table)
  table: Table;
}
