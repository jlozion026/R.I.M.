import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectCreateManyInput } from "../../../inputs/CityProjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCityProjectArgs {
  @TypeGraphQL.Field(_type => [CityProjectCreateManyInput], {
    nullable: false
  })
  data!: CityProjectCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
