import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectOrderByWithRelationInput } from "../../../inputs/CityProjectOrderByWithRelationInput";
import { CityProjectWhereInput } from "../../../inputs/CityProjectWhereInput";
import { CityProjectWhereUniqueInput } from "../../../inputs/CityProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  where?: CityProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CityProjectOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CityProjectOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CityProjectWhereUniqueInput, {
    nullable: true
  })
  cursor?: CityProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
