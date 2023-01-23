import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCity_projectInput } from "../inputs/ReportCreateWithoutCity_projectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportCreateOrConnectWithoutCity_projectInput", {
  isAbstract: true
})
export class ReportCreateOrConnectWithoutCity_projectInput {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_projectInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCity_projectInput;
}
