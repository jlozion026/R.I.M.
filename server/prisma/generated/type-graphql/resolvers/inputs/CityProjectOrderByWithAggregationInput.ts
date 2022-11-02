import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectAvgOrderByAggregateInput } from "../inputs/CityProjectAvgOrderByAggregateInput";
import { CityProjectCountOrderByAggregateInput } from "../inputs/CityProjectCountOrderByAggregateInput";
import { CityProjectMaxOrderByAggregateInput } from "../inputs/CityProjectMaxOrderByAggregateInput";
import { CityProjectMinOrderByAggregateInput } from "../inputs/CityProjectMinOrderByAggregateInput";
import { CityProjectSumOrderByAggregateInput } from "../inputs/CityProjectSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CityProjectOrderByWithAggregationInput", {
  isAbstract: true
})
export class CityProjectOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contractor_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_started?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date_ended?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  source_fund?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  project_ammount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  contract_ammount?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reports_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CityProjectCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CityProjectCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: CityProjectAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CityProjectMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CityProjectMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: CityProjectSumOrderByAggregateInput | undefined;
}
