import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutIncidentInput } from "../inputs/ReportCreateWithoutIncidentInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateOrConnectWithoutIncidentInput", {
  isAbstract: true
})
export class ReportCreateOrConnectWithoutIncidentInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutIncidentInput, {
    nullable: false
  })
  create!: ReportCreateWithoutIncidentInput;
}
