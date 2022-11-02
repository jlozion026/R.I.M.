import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentWhereUniqueInput } from "../../../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: false
  })
  where!: IncidentWhereUniqueInput;
}
