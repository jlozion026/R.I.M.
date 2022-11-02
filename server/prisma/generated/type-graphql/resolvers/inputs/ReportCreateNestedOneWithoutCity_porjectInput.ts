import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutCity_porjectInput } from "../inputs/ReportCreateOrConnectWithoutCity_porjectInput";
import { ReportCreateWithoutCity_porjectInput } from "../inputs/ReportCreateWithoutCity_porjectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateNestedOneWithoutCity_porjectInput", {
  isAbstract: true
})
export class ReportCreateNestedOneWithoutCity_porjectInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_porjectInput, {
    nullable: true
  })
  create?: ReportCreateWithoutCity_porjectInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutCity_porjectInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCity_porjectInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;
}
