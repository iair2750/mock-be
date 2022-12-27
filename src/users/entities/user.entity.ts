import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	createdDateTime?: Date;

	@Column({ type: 'varchar', nullable: true })
	@IsOptional()
	@IsString()
	username?: string;

	@Column({ type: 'varchar', nullable: true })
	@IsOptional()
	@IsString()
	firstName?: string;

	@Column({ type: 'varchar', nullable: true })
	@IsOptional()
	@IsString()
	lastName?: string;

	@Column({ type: 'varchar' })
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@Column({ type: 'varchar' })
	@IsNotEmpty()
	@IsString()
	password: string;
}
