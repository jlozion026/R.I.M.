import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccType } from "../../enums/AccType";

@TypeGraphQL.InputType("EnumAccTypeFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EnumAccTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => AccType, {
    nullable: true
  })
  set?: "NORMAL" | "ADMIN" | undefined;
}
