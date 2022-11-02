import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportCreateInput } from "../../../inputs/ReportCreateInput";
import { ReportUpdateInput } from "../../../inputs/ReportUpdateInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => ReportCreateInput, {
    nullable: false
  })
  create!: ReportCreateInput;

  @TypeGraphQL.Field(_type => ReportUpdateInput, {
    nullable: false
  })
  update!: ReportUpdateInput;
}
