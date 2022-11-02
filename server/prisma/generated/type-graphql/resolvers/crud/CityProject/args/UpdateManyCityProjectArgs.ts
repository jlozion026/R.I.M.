import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectUpdateManyMutationInput } from "../../../inputs/CityProjectUpdateManyMutationInput";
import { CityProjectWhereInput } from "../../../inputs/CityProjectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: CityProjectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  where?: CityProjectWhereInput | undefined;
}
