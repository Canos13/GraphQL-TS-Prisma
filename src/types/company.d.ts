import { Context } from "../context/context";
import { Company } from "../schema/Company";

export interface ValidateComp {
    error: boolean,
    message: string
    company: Company | null
}

export interface PropsComp {
    id: number,
    ctx: Context
}