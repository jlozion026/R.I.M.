import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateWithoutReportsInput } from "../inputs/AccountCreateWithoutReportsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateOrConnectWithoutReportsInput", {
  isAbstract: true
})
export class AccountCreateOrConnectWithoutReportsInput {
  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: false
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(_type => AccountCreateWithoutReportsInput, {
    nullable: false
  })
  create!: AccountCreateWithoutReportsInput;
}
