import { ObjectType, Field, ID } from 'type-graphql';
import { Length, IsDate, IsInt } from 'class-validator';
import { User } from './User';
import { Company } from './Company';
import { Comment } from './Comment';

@ObjectType()
export class Ticket {
    @Field(() => ID)
    id: number;

    @Field()
    @Length(1, 255)
    subject: string;

    @Field()
    description: string;

    @Field()
    @IsDate()
    creationDate: Date;

    @Field()
    type: string;

    @Field()
    priority: string;

    @Field()
    @IsDate()
    estimatedCloseDate: Date;

    @Field()
    @IsInt()
    duration: number;

    @Field()
    status: string;

    @Field()
    creatorId: number;

    @Field()
    companyId: number;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => User)
    creator: User;

    @Field(() => Company)
    company: Company;

    @Field(() => [Comment])
    comments: Comment[];

    @Field(() => [User])
    resolvers: User[];

    @Field(() => [User])
    observers: User[];
}
