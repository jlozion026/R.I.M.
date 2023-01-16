import { ValidateNested } from "class-validator";


import { ArgsType, Field } from "type-graphql";
import { CustomReportCreateInput } from "../inputs/CustomReportCreateInput";

@ArgsType()
export class CustomCreateOneReportArgs {


  @ValidateNested()
  @Field(_type => CustomReportCreateInput, {nullable: false})
  data!: CustomReportCreateInput;
}
