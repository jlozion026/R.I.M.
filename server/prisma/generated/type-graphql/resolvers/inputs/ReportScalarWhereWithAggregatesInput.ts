import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumReportTypeWithAggregatesFilter } from "../inputs/EnumReportTypeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ReportScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class ReportScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ReportScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  report_id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  location?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportTypeWithAggregatesFilter, {
    nullable: true
  })
  report_type?: EnumReportTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  reporter_id?: StringNullableWithAggregatesFilter | undefined;
}
