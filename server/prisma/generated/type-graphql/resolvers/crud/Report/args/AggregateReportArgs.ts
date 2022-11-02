import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportOrderByWithRelationInput } from "../../../inputs/ReportOrderByWithRelationInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ReportOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ReportOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  cursor?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
