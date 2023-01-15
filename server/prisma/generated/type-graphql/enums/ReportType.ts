import * as TypeGraphQL from "type-graphql";

export enum ReportType {
  RoadClosure = "RoadClosure",
  RoadConstruction = "RoadConstruction",
  RoadAccident = "RoadAccident",
  RoadEvent = "RoadEvent",
  RoadHazard = "RoadHazard"
}
TypeGraphQL.registerEnumType(ReportType, {
  name: "ReportType",
  description: undefined,
});
