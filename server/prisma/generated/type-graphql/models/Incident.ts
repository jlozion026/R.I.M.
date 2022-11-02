import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Report } from "../models/Report";

@TypeGraphQL.ObjectType("Incident", {
  isAbstract: true
})
export class Incident {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incident_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incident_type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_started!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date_ended!: Date;

  report?: Report;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reports_id!: string;
}
