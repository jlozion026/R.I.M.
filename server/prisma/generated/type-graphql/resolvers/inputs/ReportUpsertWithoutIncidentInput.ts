import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutIncidentInput } from "../inputs/ReportCreateWithoutIncidentInput";
import { ReportUpdateWithoutIncidentInput } from "../inputs/ReportUpdateWithoutIncidentInput";

@TypeGraphQL.InputType("ReportUpsertWithoutIncidentInput", {
  isAbstract: true
})
export class ReportUpsertWithoutIncidentInput {
  @TypeGraphQL.Field(_type => ReportUpdateWithoutIncidentInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutIncidentInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutIncidentInput, {
    nullable: false
  })
  create!: ReportCreateWithoutIncidentInput;
}
