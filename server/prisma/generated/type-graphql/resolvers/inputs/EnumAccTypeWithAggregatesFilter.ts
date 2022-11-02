import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAccTypeFilter } from "../inputs/NestedEnumAccTypeFilter";
import { NestedEnumAccTypeWithAggregatesFilter } from "../inputs/NestedEnumAccTypeWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.InputType("EnumAccTypeWithAggregatesFilter", {
  isAbstract: true
})
export class EnumAccTypeWithAggregatesFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumAccTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAccTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumAccTypeFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumAccTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumAccTypeFilter | undefined;
}
