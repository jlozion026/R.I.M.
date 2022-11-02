import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectUpdateInput } from "../../../inputs/CityProjectUpdateInput";
import { CityProjectWhereUniqueInput } from "../../../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectUpdateInput, {
    nullable: false
  })
  data!: CityProjectUpdateInput;

  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: false
  })
  where!: CityProjectWhereUniqueInput;
}
