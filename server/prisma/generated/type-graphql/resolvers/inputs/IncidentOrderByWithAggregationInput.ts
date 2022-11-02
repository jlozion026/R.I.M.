import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCountOrderByAggregateInput } from "../inputs/IncidentCountOrderByAggregateInput";
import { IncidentMaxOrderByAggregateInput } from "../inputs/IncidentMaxOrderByAggregateInput";
import { IncidentMinOrderByAggregateInput } from "../inputs/IncidentMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IncidentOrderByWithAggregationInput", {
  isAbstract: true
})
export class IncidentOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  incident_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  incident_type?: "asc" | "desc" | undefined;

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
  reports_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IncidentCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IncidentCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncidentMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IncidentMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IncidentMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IncidentMinOrderByAggregateInput | undefined;
}
