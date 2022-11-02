import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportUpdateWithoutReporterInput } from "../inputs/ReportUpdateWithoutReporterInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpdateWithWhereUniqueWithoutReporterInput", {
  isAbstract: true
})
export class ReportUpdateWithWhereUniqueWithoutReporterInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutReporterInput, {
    nullable: false
  })
  data!: ReportUpdateWithoutReporterInput;
}
