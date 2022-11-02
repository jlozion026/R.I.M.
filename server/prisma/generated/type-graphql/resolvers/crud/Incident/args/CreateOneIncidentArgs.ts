import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentCreateInput } from "../../../inputs/IncidentCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentCreateInput, {
    nullable: false
  })
  data!: IncidentCreateInput;
}
