import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportType } from "../../enums/ReportType";

@TypeGraphQL.InputType("EnumReportTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumReportTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => ReportType, {
    nullable: true
  })
  set?: "RoadClosure" | "RoadConstruction" | "RoadAccident" | "RoadEvent" | "RoadHazard" | "CityProject" | undefined;
}
