import { ObjectType, Field, ID } from 'type-graphql';
import { Length } from 'class-validator';
import { User, UserRol } from './User';

@ObjectType()
export class Role {
    @Field(() => ID)
    id: number;

    @Field()
    @Length(1, 255)
    name: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => [UserRol])
    users: UserRol[];
}
