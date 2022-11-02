import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportWhereInput } from "../inputs/ReportWhereInput";

@TypeGraphQL.InputType("ReportListRelationFilter", {
  isAbstract: true
})
export class ReportListRelationFilter {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  every?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  some?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  none?: ReportWhereInput | undefined;
}
