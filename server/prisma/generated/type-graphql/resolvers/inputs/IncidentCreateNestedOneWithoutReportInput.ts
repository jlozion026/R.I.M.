import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCreateOrConnectWithoutReportInput } from "../inputs/IncidentCreateOrConnectWithoutReportInput";
import { IncidentCreateWithoutReportInput } from "../inputs/IncidentCreateWithoutReportInput";
import { IncidentWhereUniqueInput } from "../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.InputType("IncidentCreateNestedOneWithoutReportInput", {
  isAbstract: true
})
export class IncidentCreateNestedOneWithoutReportInput {
  @TypeGraphQL.Field(_type => IncidentCreateWithoutReportInput, {
    nullable: true
  })
  create?: IncidentCreateWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentCreateOrConnectWithoutReportInput, {
    nullable: true
  })
  connectOrCreate?: IncidentCreateOrConnectWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: true
  })
  connect?: IncidentWhereUniqueInput | undefined;
}
