import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutReportsInput } from "../inputs/AccountCreateWithoutReportsInput";
import { AccountUpdateWithoutReportsInput } from "../inputs/AccountUpdateWithoutReportsInput";

@TypeGraphQL.InputType("AccountUpsertWithoutReportsInput", {
  isAbstract: true
})
export class AccountUpsertWithoutReportsInput {
  @TypeGraphQL.Field(_type => AccountUpdateWithoutReportsInput, {
    nullable: false
  })
  update!: AccountUpdateWithoutReportsInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutReportsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutReportsInput;
}
