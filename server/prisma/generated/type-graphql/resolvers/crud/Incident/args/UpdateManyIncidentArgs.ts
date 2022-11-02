import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentUpdateManyMutationInput } from "../../../inputs/IncidentUpdateManyMutationInput";
import { IncidentWhereInput } from "../../../inputs/IncidentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentUpdateManyMutationInput, {
    nullable: false
  })
  data!: IncidentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  where?: IncidentWhereInput | undefined;
}
