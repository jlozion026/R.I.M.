import * as TypeGraphQL from "type-graphql";

export enum IncidentScalarFieldEnum {
  incident_id = "incident_id",
  incident_type = "incident_type",
  date_started = "date_started",
  date_ended = "date_ended",
  reports_id = "reports_id"
}
TypeGraphQL.registerEnumType(IncidentScalarFieldEnum, {
  name: "IncidentScalarFieldEnum",
  description: undefined,
});
