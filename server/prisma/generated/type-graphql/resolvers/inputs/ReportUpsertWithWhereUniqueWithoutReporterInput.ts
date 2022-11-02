import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutReporterInput } from "../inputs/ReportCreateWithoutReporterInput";
import { ReportUpdateWithoutReporterInput } from "../inputs/ReportUpdateWithoutReporterInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpsertWithWhereUniqueWithoutReporterInput", {
  isAbstract: true
})
export class ReportUpsertWithWhereUniqueWithoutReporterInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutReporterInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutReporterInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutReporterInput, {
    nullable: false
  })
  create!: ReportCreateWithoutReporterInput;
}
