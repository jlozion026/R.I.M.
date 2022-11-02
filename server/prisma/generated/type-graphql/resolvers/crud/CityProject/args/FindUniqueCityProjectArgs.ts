import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectWhereUniqueInput } from "../../../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: false
  })
  where!: CityProjectWhereUniqueInput;
}
