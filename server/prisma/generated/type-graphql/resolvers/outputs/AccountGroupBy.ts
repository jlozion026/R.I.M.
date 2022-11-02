import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountCountAggregate } from "../outputs/AccountCountAggregate";
import { AccountMaxAggregate } from "../outputs/AccountMaxAggregate";
import { AccountMinAggregate } from "../outputs/AccountMinAggregate";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.ObjectType("AccountGroupBy", {
  isAbstract: true
})
export class AccountGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  acc_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string;

  @TypeGraphQL.Field(_type => AccType, {
    nullable: false
  })
  acc_type!: "NORMAL" | "ADMIN";

  @TypeGraphQL.Field(_type => AccountCountAggregate, {
    nullable: true
  })
  _count!: AccountCountAggregate | null;

  @TypeGraphQL.Field(_type => AccountMinAggregate, {
    nullable: true
  })
  _min!: AccountMinAggregate | null;

  @TypeGraphQL.Field(_type => AccountMaxAggregate, {
    nullable: true
  })
  _max!: AccountMaxAggregate | null;
}
