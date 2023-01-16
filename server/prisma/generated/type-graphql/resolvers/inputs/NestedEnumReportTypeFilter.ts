import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportType } from "../../enums/ReportType";

@TypeGraphQL.InputType("NestedEnumReportTypeFilter", {
  isAbstract: true
})
export class NestedEnumReportTypeFilter {
  @TypeGraphQL.Field(_type => ReportType, {
    nullable: true
  })
  equals?: "RoadClosure" | "RoadConstruction" | "RoadAccident" | "RoadEvent" | "RoadHazard" | "CityProject" | undefined;

  @TypeGraphQL.Field(_type => [ReportType], {
    nullable: true
  })
  in?: Array<"RoadClosure" | "RoadConstruction" | "RoadAccident" | "RoadEvent" | "RoadHazard" | "CityProject"> | undefined;

  @TypeGraphQL.Field(_type => [ReportType], {
    nullable: true
  })
  notIn?: Array<"RoadClosure" | "RoadConstruction" | "RoadAccident" | "RoadEvent" | "RoadHazard" | "CityProject"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportTypeFilter, {
    nullable: true
  })
  not?: NestedEnumReportTypeFilter | undefined;
}
