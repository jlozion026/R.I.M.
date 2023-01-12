import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateNestedOneWithoutReportsInput } from "../inputs/AccountCreateNestedOneWithoutReportsInput";
import { CityProjectCreateNestedOneWithoutReportInput } from "../inputs/CityProjectCreateNestedOneWithoutReportInput";
import { IncidentCreateNestedOneWithoutReportInput } from "../inputs/IncidentCreateNestedOneWithoutReportInput";

@TypeGraphQL.InputType("ReportCreateInput", {
  isAbstract: true
})
export class ReportCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  location!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => AccountCreateNestedOneWithoutReportsInput, {
    nullable: true
  })
  reporter?: AccountCreateNestedOneWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectCreateNestedOneWithoutReportInput, {
    nullable: true
  })
  city_porject?: CityProjectCreateNestedOneWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentCreateNestedOneWithoutReportInput, {
    nullable: true
  })
  incident?: IncidentCreateNestedOneWithoutReportInput | undefined;
}
