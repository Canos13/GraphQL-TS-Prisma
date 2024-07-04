import { Resolver, Query, Ctx } from 'type-graphql';
import { Role } from '../schema/Role';
import { Context } from '../context/context';

@Resolver(Role)
export class RoleResolver {
    @Query(() => [Role])
    async getRoles(@Ctx() ctx: Context): Promise<Role[]> {

        return await ctx.prisma.role.findMany({
            include: { users: true }
        });
        
    }
}
