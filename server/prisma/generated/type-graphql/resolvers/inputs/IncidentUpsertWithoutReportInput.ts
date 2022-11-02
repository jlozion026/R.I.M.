import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCreateWithoutReportInput } from "../inputs/IncidentCreateWithoutReportInput";
import { IncidentUpdateWithoutReportInput } from "../inputs/IncidentUpdateWithoutReportInput";

@TypeGraphQL.InputType("IncidentUpsertWithoutReportInput", {
  isAbstract: true
})
export class IncidentUpsertWithoutReportInput {
  @TypeGraphQL.Field(_type => IncidentUpdateWithoutReportInput, {
    nullable: false
  })
  update!: IncidentUpdateWithoutReportInput;

  @TypeGraphQL.Field(_type => IncidentCreateWithoutReportInput, {
    nullable: false
  })
  create!: IncidentCreateWithoutReportInput;
}
