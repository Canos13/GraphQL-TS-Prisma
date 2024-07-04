import { 
    PropsComp, 
    ValidateComp 
} from "../types/company";

const middlewareCompany = async (props:PropsComp): Promise<ValidateComp>=> {

    const { ctx, id } = props;
    const company = await ctx.prisma.company.findFirst({
        where: { id }
    });

    if(!company){
        return {
            error: true,
            message: `La compania con id: ${id} no existe`,
            company: null
        }
    }

    return {
        error: false,
        message: "",
        company
    }
}

export default middlewareCompany