import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Report } from "../models/Report";
import { AccType } from "../enums/AccType";
import { AccountCount } from "../resolvers/outputs/AccountCount";

@TypeGraphQL.ObjectType("Account", {
  isAbstract: true
})
export class Account {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  acc_id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  password?: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  designation!: string;

  @TypeGraphQL.Field(_type => AccType, {
    nullable: false
  })
  acc_type!: "NORMAL" | "ADMIN";

  reports?: Report[];

  @TypeGraphQL.Field(_type => AccountCount, {
    nullable: true
  })
  _count?: AccountCount | null;
}
