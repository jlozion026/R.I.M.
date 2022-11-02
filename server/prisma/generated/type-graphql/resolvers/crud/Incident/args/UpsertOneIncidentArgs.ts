import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentCreateInput } from "../../../inputs/IncidentCreateInput";
import { IncidentUpdateInput } from "../../../inputs/IncidentUpdateInput";
import { IncidentWhereUniqueInput } from "../../../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: false
  })
  where!: IncidentWhereUniqueInput;

  @TypeGraphQL.Field(_type => IncidentCreateInput, {
    nullable: false
  })
  create!: IncidentCreateInput;

  @TypeGraphQL.Field(_type => IncidentUpdateInput, {
    nullable: false
  })
  update!: IncidentUpdateInput;
}
