import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportWhereInput } from "../inputs/ReportWhereInput";

@TypeGraphQL.InputType("ReportRelationFilter", {
  isAbstract: true
})
export class ReportRelationFilter {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  is?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  isNot?: ReportWhereInput | undefined;
}
