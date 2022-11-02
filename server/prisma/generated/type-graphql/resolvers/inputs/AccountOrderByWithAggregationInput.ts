import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCountOrderByAggregateInput } from "../inputs/AccountCountOrderByAggregateInput";
import { AccountMaxOrderByAggregateInput } from "../inputs/AccountMaxOrderByAggregateInput";
import { AccountMinOrderByAggregateInput } from "../inputs/AccountMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountOrderByWithAggregationInput", {
  isAbstract: true
})
export class AccountOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acc_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  password?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acc_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AccountCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AccountCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AccountMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AccountMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AccountMinOrderByAggregateInput | undefined;
}
