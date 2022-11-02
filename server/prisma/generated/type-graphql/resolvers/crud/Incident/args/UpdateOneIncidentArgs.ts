import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentUpdateInput } from "../../../inputs/IncidentUpdateInput";
import { IncidentWhereUniqueInput } from "../../../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentUpdateInput, {
    nullable: false
  })
  data!: IncidentUpdateInput;

  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: false
  })
  where!: IncidentWhereUniqueInput;
}
