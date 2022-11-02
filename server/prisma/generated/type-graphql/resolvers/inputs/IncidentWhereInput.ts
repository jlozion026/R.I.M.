import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReportRelationFilter } from "../inputs/ReportRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IncidentWhereInput", {
  isAbstract: true
})
export class IncidentWhereInput {
  @TypeGraphQL.Field(_type => [IncidentWhereInput], {
    nullable: true
  })
  AND?: IncidentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncidentWhereInput], {
    nullable: true
  })
  OR?: IncidentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncidentWhereInput], {
    nullable: true
  })
  NOT?: IncidentWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  incident_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  incident_type?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_started?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_ended?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ReportRelationFilter, {
    nullable: true
  })
  report?: ReportRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reports_id?: StringFilter | undefined;
}
