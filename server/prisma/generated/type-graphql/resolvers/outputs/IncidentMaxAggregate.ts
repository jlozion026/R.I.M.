import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("IncidentMaxAggregate", {
  isAbstract: true
})
export class IncidentMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  incident_id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_started!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  date_ended!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports_id!: string | null;
}
