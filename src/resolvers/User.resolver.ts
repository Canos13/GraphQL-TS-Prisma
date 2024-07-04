import 'reflect-metadata'

import { Context } from '../context/context'
import { Resolver, Query, Ctx } from 'type-graphql';
import { User } from '../schema/User';

@Resolver(User)
export class UserResolver {
	@Query(() => [User], { nullable: true })
	async getUsers(@Ctx() ctx: Context): Promise<User[]> {
		const users = await ctx.prisma.user.findMany({
			include: {
				company: true,
				role: true,
				comments: true,
				resolvers: true,
				observers: true,
				tickets: true
			}
		});
	
		// Transforma los datos de Prisma para que coincidan con el esquema de GraphQL
		return users.map(user => ({
			id: user.id,
			username: user.username,
			email: user.email,
			password: user.password,
			fullName: user.fullName,
			position: user.position,
			companyId: user.companyId,
			roleId: user.roleId,
			createdAt: user.createdAt,
			updatedAt: user.updatedAt,
			company:{
				id: user.company.id,
				name: user.company.name,
				createdAt: user.company.createdAt,
				updatedAt: user.company.updatedAt
			}, 
			role: user.role, 
			tickets: user.tickets,
			comments: user.comments, 
			resolvers: user.resolvers, 
			observers: user.observers,
		}));
	}
	
	/* @Mutation(() => User)
	async createUser(
		@Ctx() ctx: Context,
		@Arg('username') username: string,
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Arg('fullName') fullName: string,
		@Arg('position') position: string,
		@Arg('companyId') companyId: number,
		@Arg('roleId') roleId: number
	): Promise<User> {
		return await ctx.prisma.user.create({
			data: {
				username,
				email,
				password,
				fullName,
				position,
				companyId,
				roleId,
			},
		});
	} */
}



/* @Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async allUsers(@Ctx() ctx: Context) {
	return ctx.prisma.user.findMany()
  }
}
 */