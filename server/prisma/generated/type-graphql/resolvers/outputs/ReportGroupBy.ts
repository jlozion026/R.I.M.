import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCountAggregate } from "../outputs/ReportCountAggregate";
import { ReportMaxAggregate } from "../outputs/ReportMaxAggregate";
import { ReportMinAggregate } from "../outputs/ReportMinAggregate";

@TypeGraphQL.ObjectType("ReportGroupBy", {
  isAbstract: true
})
export class ReportGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  report_id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  published!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reporter_id!: string | null;

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
