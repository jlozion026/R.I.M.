import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectCreateWithoutReportInput } from "../inputs/CityProjectCreateWithoutReportInput";
import { CityProjectWhereUniqueInput } from "../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.InputType("CityProjectCreateOrConnectWithoutReportInput", {
  isAbstract: true
})
export class CityProjectCreateOrConnectWithoutReportInput {
  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: false
  })
  where!: CityProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityProjectCreateWithoutReportInput, {
    nullable: false
  })
  create!: CityProjectCreateWithoutReportInput;
}
