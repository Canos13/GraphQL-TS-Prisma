import { ObjectType, Field, ID } from 'type-graphql';
import { IsDate, IsInt, Length } from 'class-validator';
import { Ticket } from './Ticket';
import { User } from './User';

@ObjectType()
export class Comment {
    @Field(() => ID)
    id: number;

    @Field()
    content: string;

    @Field()
    @IsDate()
    creationDate: Date;

    @Field()
    ticketId: number;

    @Field()
    authorId: number;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Ticket)
    ticket: Ticket;

    @Field(() => User)
    author: User;
}
