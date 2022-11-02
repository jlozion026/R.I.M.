import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportOrderByRelationAggregateInput } from "../inputs/ReportOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AccountOrderByWithRelationInput", {
  isAbstract: true
})
export class AccountOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => ReportOrderByRelationAggregateInput, {
    nullable: true
  })
  reports?: ReportOrderByRelationAggregateInput | undefined;
}
