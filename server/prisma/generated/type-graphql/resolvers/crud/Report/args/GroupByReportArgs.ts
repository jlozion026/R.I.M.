import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportOrderByWithAggregationInput } from "../../../inputs/ReportOrderByWithAggregationInput";
import { ReportScalarWhereWithAggregatesInput } from "../../../inputs/ReportScalarWhereWithAggregatesInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
import { ReportScalarFieldEnum } from "../../../../enums/ReportScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ReportOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ReportScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"report_id" | "createdAt" | "updatedAt" | "location" | "description" | "reporter_id" | "report_type">;

  @TypeGraphQL.Field(_type => ReportScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ReportScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
