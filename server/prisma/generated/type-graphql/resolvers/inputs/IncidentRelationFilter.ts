import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentWhereInput } from "../inputs/IncidentWhereInput";

@TypeGraphQL.InputType("IncidentRelationFilter", {
  isAbstract: true
})
export class IncidentRelationFilter {
  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  is?: IncidentWhereInput | undefined;

  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  isNot?: IncidentWhereInput | undefined;
}
