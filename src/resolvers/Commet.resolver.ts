import { Resolver, Query, Ctx } from 'type-graphql';
import { Comment } from '../schema/Comment';
import { Context } from '../context/context';

@Resolver(Comment)
export class CommentResolver {
    @Query(() => [Comment])
    async getComments(@Ctx() ctx: Context): Promise<Comment[]> {
        return await ctx.prisma.comment.findMany({
            include: {
                ticket: true,
                author: true,
            },
        });
    }

    /* @Query(() => Comment, { nullable: true })
    async getComment(@Arg('id') id: number): Promise<Comment | null> {
        return await prisma.comment.findUnique({
            where: { id },
            include: {
                ticket: true,
                author: true,
            },
        });
    }

    @Mutation(() => Comment)
    async createComment(
        @Arg('content') content: string,
        @Arg('creationDate') creationDate: Date,
        @Arg('ticketId') ticketId: number,
        @Arg('authorId') authorId: number
    ): Promise<Comment> {
        return await prisma.comment.create({
            data: {
                content,
                creationDate,
                ticketId,
                authorId,
            },
        });
    } */
}
