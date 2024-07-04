import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';
import { Role } from './Role';

import { Company } from './Company';
import { Ticket } from './Ticket';
import { Comment } from './Comment';

@ObjectType()
export class User {
	@Field(() => ID)
	id: number;

	@Field()
	@Length(1, 255)
	username: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	password: string;

	@Field()
	@Length(1, 255)
	fullName: string;

	@Field()
	@Length(1, 255)
	position: string;

	@Field()
	companyId: number;

	@Field()
	roleId: number;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;

	@Field(() => Company)
	company: Company;

	@Field(() => Role)
	role: Role;

	@Field(() => [Ticket])
	tickets: Ticket[];

	@Field(() => [Comment])
	comments: Comment[];

	@Field(() => [Ticket])
	resolvers: Ticket[];

	@Field(() => [Ticket])
	observers: Ticket[];
}

@ObjectType()
export class UserRol {
	@Field(() => ID)
	id: number;

	@Field()
	@Length(1, 255)
	username: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	@Length(1, 255)
	fullName: string;
}


@ObjectType()
export class UserInput {
	@Field(() => ID)
	id: number;

	@Field()
	@Length(1, 255)
	username: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	@Length(1, 255)
	fullName: string;
}
