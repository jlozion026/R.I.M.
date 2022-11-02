import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportCreateInput } from "../../../inputs/ReportCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneReportArgs {
  @TypeGraphQL.Field(_type => ReportCreateInput, {
    nullable: false
  })
  data!: ReportCreateInput;
}
