import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentWhereInput } from "../../../inputs/IncidentWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  where?: IncidentWhereInput | undefined;
}
