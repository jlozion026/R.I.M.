import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentCreateManyInput } from "../../../inputs/IncidentCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIncidentArgs {
  @TypeGraphQL.Field(_type => [IncidentCreateManyInput], {
    nullable: false
  })
  data!: IncidentCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
