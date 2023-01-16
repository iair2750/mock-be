import { Entity, BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	createdDateTime?: Date;

	@Column({ type: 'varchar', nullable: true, unique: true })
	@IsOptional()
	@IsNotEmpty()
	@IsString()
	username?: string;

	@Column({ type: 'varchar', nullable: true })
	@IsOptional()
	@IsNotEmpty()
	@IsString()
	firstName?: string;

	@Column({ type: 'varchar', nullable: true })
	@IsOptional()
	@IsNotEmpty()
	@IsString()
	lastName?: string;

	@Column({ type: 'varchar', unique: true })
	@IsNotEmpty()
	@IsString()
	@IsEmail()
	email: string;

	@Column({ type: 'varchar' })
	@IsNotEmpty()
	@IsString()
	password: string;
}
