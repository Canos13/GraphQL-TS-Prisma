import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { TicketObserver } from '../schema/TicketObserver';
/* import prisma from '../prisma'; */
import { Context } from '../context/context';

@Resolver(TicketObserver)
export class TicketObserverResolver {
    @Query(() => [TicketObserver])
    async getTicketObservers(@Ctx() ctx: Context): Promise<TicketObserver[]> {
        return await ctx.prisma.ticketObserver.findMany({
            include: {
                ticket: true,
                observer: true,
            },
        });
    }

    /* @Query(() => TicketObserver, { nullable: true })
    async getTicketObserver(@Arg('id') id: number): Promise<TicketObserver | null> {
        return await prisma.ticketObserver.findUnique({
            where: { id },
            include: {
                ticket: true,
                observer: true,
            },
        });
    }

    @Mutation(() => TicketObserver)
    async createTicketObserver(
        @Arg('ticketId') ticketId: number,
        @Arg('observerId') observerId: number
    ): Promise<TicketObserver> {
        return await prisma.ticketObserver.create({
            data: {
                ticketId,
                observerId,
            },
        });
    } */
}
