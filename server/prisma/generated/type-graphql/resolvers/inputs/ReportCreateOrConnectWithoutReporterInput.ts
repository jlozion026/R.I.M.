import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutReporterInput } from "../inputs/ReportCreateWithoutReporterInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateOrConnectWithoutReporterInput", {
  isAbstract: true
})
export class ReportCreateOrConnectWithoutReporterInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutReporterInput, {
    nullable: false
  })
  create!: ReportCreateWithoutReporterInput;
}
