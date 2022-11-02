import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportUpdateInput } from "../../../inputs/ReportUpdateInput";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneReportArgs {
  @TypeGraphQL.Field(_type => ReportUpdateInput, {
    nullable: false
  })
  data!: ReportUpdateInput;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;
}
