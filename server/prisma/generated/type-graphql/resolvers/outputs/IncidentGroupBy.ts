import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCountAggregate } from "../outputs/IncidentCountAggregate";
import { IncidentMaxAggregate } from "../outputs/IncidentMaxAggregate";
import { IncidentMinAggregate } from "../outputs/IncidentMinAggregate";

@TypeGraphQL.ObjectType("IncidentGroupBy", {
  isAbstract: true
})
export class IncidentGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  incident_id!: string;

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

  @TypeGraphQL.Field(_type => IncidentCountAggregate, {
    nullable: true
  })
  _count!: IncidentCountAggregate | null;

  @TypeGraphQL.Field(_type => IncidentMinAggregate, {
    nullable: true
  })
  _min!: IncidentMinAggregate | null;

  @TypeGraphQL.Field(_type => IncidentMaxAggregate, {
    nullable: true
  })
  _max!: IncidentMaxAggregate | null;
}
