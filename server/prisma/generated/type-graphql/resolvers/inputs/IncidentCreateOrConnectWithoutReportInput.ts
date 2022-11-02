import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCreateWithoutReportInput } from "../inputs/IncidentCreateWithoutReportInput";
import { IncidentWhereUniqueInput } from "../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.InputType("IncidentCreateOrConnectWithoutReportInput", {
  isAbstract: true
})
export class IncidentCreateOrConnectWithoutReportInput {
  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: false
  })
  where!: IncidentWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncidentCreateWithoutReportInput, {
    nullable: false
  })
  create!: IncidentCreateWithoutReportInput;
}
