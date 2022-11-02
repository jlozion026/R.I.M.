import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IncidentWhereUniqueInput", {
  isAbstract: true
})
export class IncidentWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incident_id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports_id?: string | undefined;
}
