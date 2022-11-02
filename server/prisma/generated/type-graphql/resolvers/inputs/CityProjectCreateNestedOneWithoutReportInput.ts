import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectCreateOrConnectWithoutReportInput } from "../inputs/CityProjectCreateOrConnectWithoutReportInput";
import { CityProjectCreateWithoutReportInput } from "../inputs/CityProjectCreateWithoutReportInput";
import { CityProjectWhereUniqueInput } from "../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.InputType("CityProjectCreateNestedOneWithoutReportInput", {
  isAbstract: true
})
export class CityProjectCreateNestedOneWithoutReportInput {
  @TypeGraphQL.Field(_type => CityProjectCreateWithoutReportInput, {
    nullable: true
  })
  create?: CityProjectCreateWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectCreateOrConnectWithoutReportInput, {
    nullable: true
  })
  connectOrCreate?: CityProjectCreateOrConnectWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: CityProjectWhereUniqueInput | undefined;
}
