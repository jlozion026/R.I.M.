import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CityProjectScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class CityProjectScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CityProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CityProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CityProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityProjectScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CityProjectScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  project_name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  contractor_name?: StringWithAggregatesFilter | undefined;

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
  source_fund?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  project_ammount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  contract_ammount?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  reports_id?: StringWithAggregatesFilter | undefined;
}
