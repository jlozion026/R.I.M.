import { ValidateNested } from "class-validator";
import * as TypeGraphQL from "type-graphql";
import { ReportWhereUniqueInput } from "../../../../prisma/generated/type-graphql/resolvers/inputs/ReportWhereUniqueInput";
import { CustomReportUpdateInput } from "../inputs/CustomReportUpdateInput";


@TypeGraphQL.ArgsType()
export class CustomUpdateOneReportArgs {
  
  @ValidateNested()
  @TypeGraphQL.Field(_type => CustomReportUpdateInput, {
    nullable: false
  })
  data!: CustomReportUpdateInput;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: false
  })
  where!: ReportWhereUniqueInput;
}
