import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectAvgAggregate } from "../outputs/CityProjectAvgAggregate";
import { CityProjectCountAggregate } from "../outputs/CityProjectCountAggregate";
import { CityProjectMaxAggregate } from "../outputs/CityProjectMaxAggregate";
import { CityProjectMinAggregate } from "../outputs/CityProjectMinAggregate";
import { CityProjectSumAggregate } from "../outputs/CityProjectSumAggregate";

@TypeGraphQL.ObjectType("AggregateCityProject", {
  isAbstract: true
})
export class AggregateCityProject {
  @TypeGraphQL.Field(_type => CityProjectCountAggregate, {
    nullable: true
  })
  _count!: CityProjectCountAggregate | null;

  @TypeGraphQL.Field(_type => CityProjectAvgAggregate, {
    nullable: true
  })
  _avg!: CityProjectAvgAggregate | null;

  @TypeGraphQL.Field(_type => CityProjectSumAggregate, {
    nullable: true
  })
  _sum!: CityProjectSumAggregate | null;

  @TypeGraphQL.Field(_type => CityProjectMinAggregate, {
    nullable: true
  })
  _min!: CityProjectMinAggregate | null;

  @TypeGraphQL.Field(_type => CityProjectMaxAggregate, {
    nullable: true
  })
  _max!: CityProjectMaxAggregate | null;
}
