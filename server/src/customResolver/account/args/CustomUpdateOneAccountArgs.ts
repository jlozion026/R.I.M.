import { ArgsType, Field } from "type-graphql";
import { CustomAccountUpdateInput } from "../inputs/CustomAccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../../prisma/generated/type-graphql";

import { ValidateNested } from "class-validator";

@ArgsType()
export class CustomUpdateOneAccountArgs {

  @ValidateNested()
  @Field(_type => CustomAccountUpdateInput, {
    nullable: false
  })
  data!: CustomAccountUpdateInput;

  @Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;
}
