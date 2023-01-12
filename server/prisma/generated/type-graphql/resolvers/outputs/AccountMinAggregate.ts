import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.ObjectType("AccountMinAggregate", {
  isAbstract: true
})
export class AccountMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  acc_id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  designation!: string | null;

  @TypeGraphQL.Field(_type => AccType, {
    nullable: true
  })
  acc_type!: "NORMAL" | "ADMIN" | null;
}
