import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutCity_projectInput } from "../inputs/ReportCreateOrConnectWithoutCity_projectInput";
import { ReportCreateWithoutCity_projectInput } from "../inputs/ReportCreateWithoutCity_projectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateNestedOneWithoutCity_projectInput", {
  isAbstract: true
})
export class ReportCreateNestedOneWithoutCity_projectInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_projectInput, {
    nullable: true
  })
  create?: ReportCreateWithoutCity_projectInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutCity_projectInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCity_projectInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;
}
