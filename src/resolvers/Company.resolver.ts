import { Resolver, Query, Mutation, Arg, Ctx, ID } from 'type-graphql';
import { Company, UpdateCompanyInput } from '../schema/Company';
import { Context } from '../context/context';
import  MiddlewareCompany  from '../helpers/Company';
import { PaginationInput } from '../schema/Pagination';

@Resolver(Company)
export class CompanyResolver {

    //###################  Traer todas las companias  #######################
    @Query(() => [Company])
    async getCompanies(
        @Ctx() ctx: Context,
        @Arg('pagination', () => PaginationInput, { nullable: true }) pagination: PaginationInput
    ): Promise<Company[]> {
        const { page, pageSize } = pagination || { page: 1, pageSize: 10 };
        const skip = (page - 1) * pageSize;
        const take = pageSize;

        return await ctx.prisma.company.findMany({
            skip,
            take,
        });
    }

    //###################  Traer una compania por ID  #######################
    @Query(() => Company, { nullable: true })
    async getCompanyById(
        @Ctx() ctx: Context,
        @Arg('id', () => ID) id: string
    ): Promise<Company | null> {
        const { error, message, company } = await MiddlewareCompany({ctx, id: +id})

        if(error) throw new Error(message)

        return company
    }

    //###################  Crear una compania  #######################
    @Mutation(() => Company)
    async createCompany(
        @Ctx() ctx: Context, 
        @Arg('name') name: string
    ): Promise<Company> {
        return await ctx.prisma.company.create({
            data: { name }
        });
    }

    //###################  Actualizar compania (nombre)  #######################
    @Mutation(() => Company)
    async updateCompanyName(
        @Ctx() ctx: Context,
        @Arg('data') data: UpdateCompanyInput
    ): Promise<Company> {
        const { id, name } = data;

        const { error, message } = await MiddlewareCompany({ctx, id})

        if(error) throw new Error(message)
        
        return await ctx.prisma.company.update({
            where: { id: +id },
            data: { name }
        });
    }

    //###################  Eliminar compania (por ID) #######################
    @Mutation(() => Company)
    async deleteCompany(
        @Ctx() ctx: Context,
        @Arg('id', () => ID) id: string
    ): Promise<Company> {

        const { error, message } = await MiddlewareCompany({ctx, id: +id})

        if(error) throw new Error(message)

        return await ctx.prisma.company.delete({
            where: { id: +id }
        });
    }
}