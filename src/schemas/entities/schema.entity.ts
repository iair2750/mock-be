import { Table } from 'tables/entities/table.entity';
import {
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  Entity,
  Column,
  OneToMany
} from 'typeorm';
import { User } from 'users/entities/user.entity';

@Entity()
export class Schema extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdDateTime: Date;

  @ManyToOne(() => User)
  owner: User;

  @OneToMany(() => Table, table => table.schema)
  tables: Table[];
}
