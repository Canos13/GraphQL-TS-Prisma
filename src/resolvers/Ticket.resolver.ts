import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { Ticket } from '../schema/Ticket';
/* import prisma from '../prisma'; */
import { Context } from '../context/context';

@Resolver(Ticket)
export class TicketResolver {
    @Query(() => [Ticket])
    async getTickets(@Ctx() ctx: Context): Promise<Ticket[]> {
        return await ctx.prisma.ticket.findMany({
            include: {
                creator: true,
                company: true,
                comments: true,
                resolvers: true,
                observers: true,
            },
        });
    }


/* 
    @Query(() => Ticket, { nullable: true })
    async getTicket(@Arg('id') id: number): Promise<Ticket | null> {
        return await prisma.ticket.findUnique({
            where: { id },
            include: {
                creator: true,
                company: true,
                comments: true,
                resolvers: true,
                observers: true,
            },
        });
    }

    @Mutation(() => Ticket)
    async createTicket(
        @Arg('subject') subject: string,
        @Arg('description') description: string,
        @Arg('creationDate') creationDate: Date,
        @Arg('type') type: string,
        @Arg('priority') priority: string,
        @Arg('estimatedCloseDate') estimatedCloseDate: Date,
        @Arg('duration') duration: number,
        @Arg('status') status: string,
        @Arg('creatorId') creatorId: number,
        @Arg('companyId') companyId: number
    ): Promise<Ticket> {
        return await prisma.ticket.create({
            data: {
                subject,
                description,
                creationDate,
                type,
                priority,
                estimatedCloseDate,
                duration,
                status,
                creatorId,
                companyId,
            },
        });
    } */
}
