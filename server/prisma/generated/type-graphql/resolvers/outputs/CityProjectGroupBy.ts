import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectAvgAggregate } from "../outputs/CityProjectAvgAggregate";
import { CityProjectCountAggregate } from "../outputs/CityProjectCountAggregate";
import { CityProjectMaxAggregate } from "../outputs/CityProjectMaxAggregate";
import { CityProjectMinAggregate } from "../outputs/CityProjectMinAggregate";
import { CityProjectSumAggregate } from "../outputs/CityProjectSumAggregate";

@TypeGraphQL.ObjectType("CityProjectGroupBy", {
  isAbstract: true
})
export class CityProjectGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  project_name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  contractor_name!: string;

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
  source_fund!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  project_ammount!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  contract_ammount!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  reports_id!: string;

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
