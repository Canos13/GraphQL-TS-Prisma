import { ObjectType, Field, ID, InputType } from 'type-graphql';
import { Length } from 'class-validator';

@ObjectType()
export class Company {
	@Field(() => ID)
	id: number;

	@Field()
	@Length(1, 255)
	name: string;

	@Field()
	createdAt: Date;

	@Field()
	updatedAt: Date;
}

@InputType()
export class UpdateCompanyInput {
    @Field(() => ID)
    id: number;

    @Field()
    @Length(1, 255)
    name: string;
}