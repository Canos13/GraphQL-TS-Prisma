import { ObjectType, Field, ID } from 'type-graphql';
import { IsInt } from 'class-validator';
import { Ticket } from './Ticket';
import { User } from './User';

@ObjectType()
export class TicketResolver {
    @Field(() => ID)
    id: number;

    @Field()
    @IsInt()
    ticketId: number;

    @Field()
    @IsInt()
    resolverId: number;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Ticket)
    ticket: Ticket;

    @Field(() => User)
    resolver: User;
}
