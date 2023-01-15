import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCountOrderByAggregateInput } from "../inputs/ReportCountOrderByAggregateInput";
import { ReportMaxOrderByAggregateInput } from "../inputs/ReportMaxOrderByAggregateInput";
import { ReportMinOrderByAggregateInput } from "../inputs/ReportMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ReportOrderByWithAggregationInput", {
  isAbstract: true
})
export class ReportOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  report_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reporter_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  report_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ReportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ReportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ReportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ReportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ReportMinOrderByAggregateInput | undefined;
}
