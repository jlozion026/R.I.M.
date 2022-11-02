import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { ReportRelationFilter } from "../inputs/ReportRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CityProjectWhereInput", {
  isAbstract: true
})
export class CityProjectWhereInput {
  @TypeGraphQL.Field(_type => [CityProjectWhereInput], {
    nullable: true
  })
  AND?: CityProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityProjectWhereInput], {
    nullable: true
  })
  OR?: CityProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityProjectWhereInput], {
    nullable: true
  })
  NOT?: CityProjectWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  project_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  contractor_name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_started?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  date_ended?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  source_fund?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  project_ammount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  contract_ammount?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => ReportRelationFilter, {
    nullable: true
  })
  report?: ReportRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  reports_id?: StringFilter | undefined;
}
