import * as TypeGraphQL from "type-graphql";

export enum CityProjectScalarFieldEnum {
  project_id = "project_id",
  project_name = "project_name",
  contractor_name = "contractor_name",
  date_started = "date_started",
  date_ended = "date_ended",
  source_fund = "source_fund",
  project_ammount = "project_ammount",
  contract_ammount = "contract_ammount",
  reports_id = "reports_id"
}
TypeGraphQL.registerEnumType(CityProjectScalarFieldEnum, {
  name: "CityProjectScalarFieldEnum",
  description: undefined,
});
