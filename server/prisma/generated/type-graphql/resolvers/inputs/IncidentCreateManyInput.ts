import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IncidentCreateManyInput", {
  isAbstract: true
})
export class IncidentCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incident_id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_started!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_ended!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reports_id!: string;
}
