import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumReportTypeFilter } from "../inputs/EnumReportTypeFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ReportScalarWhereInput", {
  isAbstract: true
})
export class ReportScalarWhereInput {
  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  AND?: ReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  OR?: ReportScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  NOT?: ReportScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => JsonFilter, {
    nullable: true
  })
  location?: JsonFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  reporter_id?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => EnumReportTypeFilter, {
    nullable: true
  })
  report_type?: EnumReportTypeFilter | undefined;
}
