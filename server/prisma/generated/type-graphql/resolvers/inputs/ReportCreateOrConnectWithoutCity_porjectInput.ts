import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCity_porjectInput } from "../inputs/ReportCreateWithoutCity_porjectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateOrConnectWithoutCity_porjectInput", {
  isAbstract: true
})
export class ReportCreateOrConnectWithoutCity_porjectInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_porjectInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCity_porjectInput;
}
