import { Schema } from 'schemas/entities/schema.entity';
import { Column as ColumnEntity } from 'columns/entities/column.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Table extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdDateTime: Date;

  @ManyToOne(() => Schema)
  schema: Schema;

  @OneToMany(() => ColumnEntity, column => column.table)
  columns: ColumnEntity[];
}
