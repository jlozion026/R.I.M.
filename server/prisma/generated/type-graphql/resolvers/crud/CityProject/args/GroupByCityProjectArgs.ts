import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CityProjectOrderByWithAggregationInput } from "../../../inputs/CityProjectOrderByWithAggregationInput";
import { CityProjectScalarWhereWithAggregatesInput } from "../../../inputs/CityProjectScalarWhereWithAggregatesInput";
import { CityProjectWhereInput } from "../../../inputs/CityProjectWhereInput";
import { CityProjectScalarFieldEnum } from "../../../../enums/CityProjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCityProjectArgs {
  @TypeGraphQL.Field(_type => CityProjectWhereInput, {
    nullable: true
  })
  where?: CityProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CityProjectOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CityProjectOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CityProjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"project_id" | "project_name" | "contractor_name" | "date_started" | "date_ended" | "source_fund" | "project_ammount" | "contract_ammount" | "reports_id">;

  @TypeGraphQL.Field(_type => CityProjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CityProjectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
