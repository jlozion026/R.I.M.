import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ReportWhereUniqueInput", {
  isAbstract: true
})
export class ReportWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  report_id?: string | undefined;
}
