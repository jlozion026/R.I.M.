import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateManyReporterInputEnvelope } from "../inputs/ReportCreateManyReporterInputEnvelope";
import { ReportCreateOrConnectWithoutReporterInput } from "../inputs/ReportCreateOrConnectWithoutReporterInput";
import { ReportCreateWithoutReporterInput } from "../inputs/ReportCreateWithoutReporterInput";
import { ReportScalarWhereInput } from "../inputs/ReportScalarWhereInput";
import { ReportUpdateManyWithWhereWithoutReporterInput } from "../inputs/ReportUpdateManyWithWhereWithoutReporterInput";
import { ReportUpdateWithWhereUniqueWithoutReporterInput } from "../inputs/ReportUpdateWithWhereUniqueWithoutReporterInput";
import { ReportUpsertWithWhereUniqueWithoutReporterInput } from "../inputs/ReportUpsertWithWhereUniqueWithoutReporterInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpdateManyWithoutReporterNestedInput", {
  isAbstract: true
})
export class ReportUpdateManyWithoutReporterNestedInput {
  @TypeGraphQL.Field(_type => [ReportCreateWithoutReporterInput], {
    nullable: true
  })
  create?: ReportCreateWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportCreateOrConnectWithoutReporterInput], {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpsertWithWhereUniqueWithoutReporterInput], {
    nullable: true
  })
  upsert?: ReportUpsertWithWhereUniqueWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportCreateManyReporterInputEnvelope, {
    nullable: true
  })
  createMany?: ReportCreateManyReporterInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  set?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  delete?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportWhereUniqueInput], {
    nullable: true
  })
  connect?: ReportWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpdateWithWhereUniqueWithoutReporterInput], {
    nullable: true
  })
  update?: ReportUpdateWithWhereUniqueWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportUpdateManyWithWhereWithoutReporterInput], {
    nullable: true
  })
  updateMany?: ReportUpdateManyWithWhereWithoutReporterInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ReportScalarWhereInput[] | undefined;
}
