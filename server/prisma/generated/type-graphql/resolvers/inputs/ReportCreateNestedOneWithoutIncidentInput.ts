import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutIncidentInput } from "../inputs/ReportCreateOrConnectWithoutIncidentInput";
import { ReportCreateWithoutIncidentInput } from "../inputs/ReportCreateWithoutIncidentInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateNestedOneWithoutIncidentInput", {
  isAbstract: true
})
export class ReportCreateNestedOneWithoutIncidentInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutIncidentInput, {
    nullable: true
  })
  create?: ReportCreateWithoutIncidentInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutIncidentInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutIncidentInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;
}
