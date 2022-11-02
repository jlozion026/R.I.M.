import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountRelationFilter } from "../inputs/AccountRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CityProjectRelationFilter } from "../inputs/CityProjectRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IncidentRelationFilter } from "../inputs/IncidentRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ReportWhereInput", {
  isAbstract: true
})
export class ReportWhereInput {
  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  AND?: ReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  OR?: ReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereInput], {
    nullable: true
  })
  NOT?: ReportWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  report_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  location?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => AccountRelationFilter, {
    nullable: true
  })
  reporter?: AccountRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reporter_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CityProjectRelationFilter, {
    nullable: true
  })
  city_porject?: CityProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IncidentRelationFilter, {
    nullable: true
  })
  incident?: IncidentRelationFilter | undefined;
}
