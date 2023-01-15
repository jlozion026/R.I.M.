import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IncidentOrderByWithAggregationInput } from "../../../inputs/IncidentOrderByWithAggregationInput";
import { IncidentScalarWhereWithAggregatesInput } from "../../../inputs/IncidentScalarWhereWithAggregatesInput";
import { IncidentWhereInput } from "../../../inputs/IncidentWhereInput";
import { IncidentScalarFieldEnum } from "../../../../enums/IncidentScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByIncidentArgs {
  @TypeGraphQL.Field(_type => IncidentWhereInput, {
    nullable: true
  })
  where?: IncidentWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IncidentOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: IncidentOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [IncidentScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"incident_id" | "date_started" | "date_ended" | "reports_id">;

  @TypeGraphQL.Field(_type => IncidentScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: IncidentScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
