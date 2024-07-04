import { ObjectType, Field, ID } from 'type-graphql';
import { IsInt } from 'class-validator';
import { Ticket } from './Ticket';
import { User } from './User';

@ObjectType()
export class TicketObserver {
    @Field(() => ID)
    id: number;

    @Field()
    @IsInt()
    ticketId: number;

    @Field()
    @IsInt()
    observerId: number;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;

    @Field(() => Ticket)
    ticket: Ticket;

    @Field(() => User)
    observer: User;
}
