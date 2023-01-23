import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectCreateNestedOneWithoutReportInput } from "../inputs/CityProjectCreateNestedOneWithoutReportInput";
import { IncidentCreateNestedOneWithoutReportInput } from "../inputs/IncidentCreateNestedOneWithoutReportInput";
import { ReportType } from "../../enums/ReportType";

@TypeGraphQL.InputType("ReportCreateWithoutReporterInput", {
  isAbstract: true
})
export class ReportCreateWithoutReporterInput {
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

  @TypeGraphQL.Field(_type => ReportType, {
    nullable: false
  })
  report_type!: "RoadClosure" | "RoadConstruction" | "RoadAccident" | "RoadEvent" | "RoadHazard" | "CityProject";

  @TypeGraphQL.Field(_type => CityProjectCreateNestedOneWithoutReportInput, {
    nullable: true
  })
  city_project?: CityProjectCreateNestedOneWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentCreateNestedOneWithoutReportInput, {
    nullable: true
  })
  incident?: IncidentCreateNestedOneWithoutReportInput | undefined;
}
