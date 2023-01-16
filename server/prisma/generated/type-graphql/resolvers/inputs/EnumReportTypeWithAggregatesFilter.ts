import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumReportTypeFilter } from "../inputs/NestedEnumReportTypeFilter";
import { NestedEnumReportTypeWithAggregatesFilter } from "../inputs/NestedEnumReportTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ReportType } from "../../enums/ReportType";

@TypeGraphQL.InputType("EnumReportTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumReportTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumReportTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumReportTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumReportTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumReportTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumReportTypeFilter | undefined;
}
