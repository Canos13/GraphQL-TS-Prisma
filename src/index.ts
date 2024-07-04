import 'reflect-metadata';
import { ApolloServer } from '@apollo/server'
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/User.resolver';
import { RoleResolver } from './resolvers/Role.resolver';
import { CompanyResolver } from './resolvers/Company.resolver';
import { TicketResolver } from './resolvers/Ticket.resolver';
import { CommentResolver } from './resolvers/Commet.resolver';
import { TicketResolverResolver } from './resolvers/TicketResolver.resolver';
import { TicketObserverResolver } from './resolvers/TicketObserver.resolver';
import { startStandaloneServer } from '@apollo/server/standalone'
import { Context, context } from './context/context';
import { GraphQLScalarType } from 'graphql';
import { DateTimeResolver } from 'graphql-scalars';

async function main() {
	try {
		const schema = await buildSchema({
			resolvers: [
				UserResolver, 
				RoleResolver, 
				CompanyResolver, 
				TicketResolver, 
				CommentResolver, 
				TicketResolverResolver, 
				TicketObserverResolver
			],
			validate: { forbidUnknownValues: false },
			scalarsMap: [{ type: GraphQLScalarType, scalar: DateTimeResolver }]
		});
	
		const server = new ApolloServer<Context>({ schema });
		const { url } = await startStandaloneServer(server, { context: async () => context })
		console.log(`🚀 ApolloServer ready at: ${url}`)
	} catch (error) {
		console.log(error)
	}
}

main();
