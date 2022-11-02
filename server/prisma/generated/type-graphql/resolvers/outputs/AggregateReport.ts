import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCountAggregate } from "../outputs/ReportCountAggregate";
import { ReportMaxAggregate } from "../outputs/ReportMaxAggregate";
import { ReportMinAggregate } from "../outputs/ReportMinAggregate";

@TypeGraphQL.ObjectType("AggregateReport", {
  isAbstract: true
})
export class AggregateReport {
  @TypeGraphQL.Field(_type => ReportCountAggregate, {
    nullable: true
  })
  _count!: ReportCountAggregate | null;

  @TypeGraphQL.Field(_type => ReportMinAggregate, {
    nullable: true
  })
  _min!: ReportMinAggregate | null;

  @TypeGraphQL.Field(_type => ReportMaxAggregate, {
    nullable: true
  })
  _max!: ReportMaxAggregate | null;
}
