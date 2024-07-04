import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class PaginationInput {
    @Field(() => Int, { defaultValue: 1 })
    page: number;

    @Field(() => Int, { defaultValue: 10 })
    pageSize: number;
}
