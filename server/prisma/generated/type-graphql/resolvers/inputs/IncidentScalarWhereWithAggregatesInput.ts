import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("IncidentScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class IncidentScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [IncidentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: IncidentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncidentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: IncidentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncidentScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: IncidentScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  incident_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date_started?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  date_ended?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reports_id?: StringWithAggregatesFilter | undefined;
}
