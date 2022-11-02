import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateWithoutCity_porjectInput } from "../inputs/ReportCreateWithoutCity_porjectInput";
import { ReportUpdateWithoutCity_porjectInput } from "../inputs/ReportUpdateWithoutCity_porjectInput";

@TypeGraphQL.InputType("ReportUpsertWithoutCity_porjectInput", {
  isAbstract: true
})
export class ReportUpsertWithoutCity_porjectInput {
  @TypeGraphQL.Field(_type => ReportUpdateWithoutCity_porjectInput, {
    nullable: false
  })
  update!: ReportUpdateWithoutCity_porjectInput;

  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_porjectInput, {
    nullable: false
  })
  create!: ReportCreateWithoutCity_porjectInput;
}
