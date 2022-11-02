import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCountAggregate } from "../outputs/IncidentCountAggregate";
import { IncidentMaxAggregate } from "../outputs/IncidentMaxAggregate";
import { IncidentMinAggregate } from "../outputs/IncidentMinAggregate";

@TypeGraphQL.ObjectType("AggregateIncident", {
  isAbstract: true
})
export class AggregateIncident {
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
