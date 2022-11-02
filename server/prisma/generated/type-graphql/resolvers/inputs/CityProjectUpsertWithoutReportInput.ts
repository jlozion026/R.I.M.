import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectCreateWithoutReportInput } from "../inputs/CityProjectCreateWithoutReportInput";
import { CityProjectUpdateWithoutReportInput } from "../inputs/CityProjectUpdateWithoutReportInput";

@TypeGraphQL.InputType("CityProjectUpsertWithoutReportInput", {
  isAbstract: true
})
export class CityProjectUpsertWithoutReportInput {
  @TypeGraphQL.Field(_type => CityProjectUpdateWithoutReportInput, {
    nullable: false
  })
  update!: CityProjectUpdateWithoutReportInput;

  @TypeGraphQL.Field(_type => CityProjectCreateWithoutReportInput, {
    nullable: false
  })
  create!: CityProjectCreateWithoutReportInput;
}
