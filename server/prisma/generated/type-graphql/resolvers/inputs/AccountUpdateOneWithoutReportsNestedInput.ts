import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCreateOrConnectWithoutReportsInput } from "../inputs/AccountCreateOrConnectWithoutReportsInput";
import { AccountCreateWithoutReportsInput } from "../inputs/AccountCreateWithoutReportsInput";
import { AccountUpdateWithoutReportsInput } from "../inputs/AccountUpdateWithoutReportsInput";
import { AccountUpsertWithoutReportsInput } from "../inputs/AccountUpsertWithoutReportsInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateOneWithoutReportsNestedInput", {
  isAbstract: true
})
export class AccountUpdateOneWithoutReportsNestedInput {
  @TypeGraphQL.Field(_type => AccountCreateWithoutReportsInput, {
    nullable: true
  })
  create?: AccountCreateWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => AccountCreateOrConnectWithoutReportsInput, {
    nullable: true
  })
  connectOrCreate?: AccountCreateOrConnectWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpsertWithoutReportsInput, {
    nullable: true
  })
  upsert?: AccountUpsertWithoutReportsInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => AccountWhereUniqueInput, {
    nullable: true
  })
  connect?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateWithoutReportsInput, {
    nullable: true
  })
  update?: AccountUpdateWithoutReportsInput | undefined;
}
