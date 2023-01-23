import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCity_projectInput } from "../inputs/ReportCreateWithoutCity_projectInput";
import { ReportUpdateWithoutCity_projectInput } from "../inputs/ReportUpdateWithoutCity_projectInput";

@TypeGraphQL.InputType("ReportUpsertWithoutCity_projectInput", {
  isAbstract: true
})
export class ReportUpsertWithoutCity_projectInput {
  @TypeGraphQL.Field(_type => ReportUpdateWithoutCity_projectInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutCity_projectInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_projectInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCity_projectInput;
}
