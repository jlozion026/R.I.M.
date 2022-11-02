import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectCreateInput } from "../../../inputs/CityProjectCreateInput";
import { CityProjectUpdateInput } from "../../../inputs/CityProjectUpdateInput";
import { CityProjectWhereUniqueInput } from "../../../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: false
  })
  where!: CityProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => CityProjectCreateInput, {
    nullable: false
  })
  create!: CityProjectCreateInput;

  @TypeGraphQL.Field(_type => CityProjectUpdateInput, {
    nullable: false
  })
  update!: CityProjectUpdateInput;
}
