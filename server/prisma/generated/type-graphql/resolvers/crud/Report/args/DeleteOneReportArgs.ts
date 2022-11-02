import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportWhereUniqueInput } from "../../../inputs/ReportWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;
}
