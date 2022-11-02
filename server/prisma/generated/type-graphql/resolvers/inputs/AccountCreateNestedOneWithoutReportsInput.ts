import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutReportsInput } from "../inputs/AccountCreateOrConnectWithoutReportsInput";
import { AccountCreateWithoutReportsInput } from "../inputs/AccountCreateWithoutReportsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountCreateNestedOneWithoutReportsInput", {
  isAbstract: true
})
export class AccountCreateNestedOneWithoutReportsInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutReportsInput, {
    nullable: true
  })
  create?: AccountCreateWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutReportsInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;
}
