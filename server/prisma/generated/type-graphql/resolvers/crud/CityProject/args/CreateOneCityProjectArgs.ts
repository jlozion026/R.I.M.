import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectCreateInput } from "../../../inputs/CityProjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectCreateInput, {
    nullable: false
  })
  data!: CityProjectCreateInput;
}
