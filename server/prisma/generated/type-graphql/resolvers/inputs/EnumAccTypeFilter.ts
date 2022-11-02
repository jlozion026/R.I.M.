import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAccTypeFilter } from "../inputs/NestedEnumAccTypeFilter";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.InputType("EnumAccTypeFilter", {
  isAbstract: true
})
export class EnumAccTypeFilter {
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
