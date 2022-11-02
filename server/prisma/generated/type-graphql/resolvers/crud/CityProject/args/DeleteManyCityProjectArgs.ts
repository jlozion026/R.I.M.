import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectWhereInput } from "../../../inputs/CityProjectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  where?: CityProjectWhereInput | undefined;
}
