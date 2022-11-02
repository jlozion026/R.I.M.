import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentOrderByWithRelationInput } from "../../../inputs/IncidentOrderByWithRelationInput";
import { IncidentWhereInput } from "../../../inputs/IncidentWhereInput";
import { IncidentWhereUniqueInput } from "../../../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  where?: IncidentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncidentOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IncidentOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: true
  })
  cursor?: IncidentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
