import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentOrderByWithRelationInput } from "../../../inputs/IncidentOrderByWithRelationInput";
import { IncidentWhereInput } from "../../../inputs/IncidentWhereInput";
import { IncidentWhereUniqueInput } from "../../../inputs/IncidentWhereUniqueInput";
import { IncidentScalarFieldEnum } from "../../../../enums/IncidentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyIncidentArgs {
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

  @TypeGraphQL.Field(_type => [IncidentScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"incident_id" | "incident_type" | "date_started" | "date_ended" | "reports_id"> | undefined;
}
