import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CityProjectWhereInput } from "../inputs/CityProjectWhereInput";

@TypeGraphQL.InputType("CityProjectRelationFilter", {
  isAbstract: true
})
export class CityProjectRelationFilter {
  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  is?: CityProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  isNot?: CityProjectWhereInput | undefined;
}
