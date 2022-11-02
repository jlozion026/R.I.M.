import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyReportArgs {
  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;
}
