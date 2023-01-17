import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { User } from 'users/entities/user.entity';

export class Application extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	createdDateTime: Date;

	@ManyToOne(() => User)
	owner: User;
}
