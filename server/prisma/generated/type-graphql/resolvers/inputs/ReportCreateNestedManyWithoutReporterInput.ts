import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyReporterInputEnvelope } from "../inputs/ReportCreateManyReporterInputEnvelope";
import { ReportCreateOrConnectWithoutReporterInput } from "../inputs/ReportCreateOrConnectWithoutReporterInput";
import { ReportCreateWithoutReporterInput } from "../inputs/ReportCreateWithoutReporterInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateNestedManyWithoutReporterInput", {
  isAbstract: true
})
export class ReportCreateNestedManyWithoutReporterInput {
  @TypeGraphQL.Field(_type => [ReportCreateWithoutReporterInput], {
    nullable: true
  })
  create?: ReportCreateWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportCreateOrConnectWithoutReporterInput], {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportCreateManyReporterInputEnvelope, {
    nullable: true
  })
  createMany?: ReportCreateManyReporterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  connect?: ReportWhereUniqueInput[] | undefined;
}
