import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportUpdateManyMutationInput } from "../../../inputs/ReportUpdateManyMutationInput";
import { ReportWhereInput } from "../../../inputs/ReportWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyReportArgs {
  @TypeGraphQL.Field(_type => ReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: ReportUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ReportWhereInput, {
    nullable: true
  })
  where?: ReportWhereInput | undefined;
}
