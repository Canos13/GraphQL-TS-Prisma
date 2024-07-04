import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql';
import { TicketResolver } from '../schema/TicketResolver';
/* import prisma from '../prisma'; */
import { Context } from '../context/context';

@Resolver(TicketResolver)
export class TicketResolverResolver {
    @Query(() => [TicketResolver])
    async getTicketResolvers(@Ctx() ctx: Context): Promise<TicketResolver[]> {
        return await ctx.prisma.ticketResolver.findMany({
            include: {
                ticket: true,
                resolver: true,
            },
        });
    }

   /*  @Query(() => TicketResolver, { nullable: true })
    async getTicketResolver(@Arg('id') id: number): Promise<TicketResolver | null> {
        return await prisma.ticketResolver.findUnique({
            where: { id },
            include: {
                ticket: true,
                resolver: true,
            },
        });
    }

    @Mutation(() => TicketResolver)
    async createTicketResolver(
        @Arg('ticketId') ticketId: number,
        @Arg('resolverId') resolverId: number
    ): Promise<TicketResolver> {
        return await prisma.ticketResolver.create({
            data: {
                ticketId,
                resolverId,
            },
        });
    } */
}
