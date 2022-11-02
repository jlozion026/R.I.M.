import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.InputType("NestedEnumAccTypeFilter", {
  isAbstract: true
})
export class NestedEnumAccTypeFilter {
  @TypeGraphQL.Field(_type => AccType, {
    nullable: true
  })
  equals?: "NORMAL" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [AccType], {
    nullable: true
  })
  in?: Array<"NORMAL" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [AccType], {
    nullable: true
  })
  notIn?: Array<"NORMAL" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccTypeFilter, {
    nullable: true
  })
  not?: NestedEnumAccTypeFilter | undefined;
}
