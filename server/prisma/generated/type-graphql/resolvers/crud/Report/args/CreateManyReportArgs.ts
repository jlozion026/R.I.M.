import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ReportCreateManyInput } from "../../../inputs/ReportCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyReportArgs {
  @TypeGraphQL.Field(_type => [ReportCreateManyInput], {
    nullable: false
  })
  data!: ReportCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
