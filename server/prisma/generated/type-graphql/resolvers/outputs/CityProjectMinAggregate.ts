import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CityProjectMinAggregate", {
  isAbstract: true
})
export class CityProjectMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  project_name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  contractor_name!: string | null;

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
  source_fund!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  project_ammount!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  contract_ammount!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reports_id!: string | null;
}
