import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAccTypeFieldUpdateOperationsInput } from "../inputs/EnumAccTypeFieldUpdateOperationsInput";
import { ReportUpdateManyWithoutReporterNestedInput } from "../inputs/ReportUpdateManyWithoutReporterNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AccountUpdateInput", {
  isAbstract: true
})
export class AccountUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  acc_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  designation?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumAccTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  acc_type?: EnumAccTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateManyWithoutReporterNestedInput, {
    nullable: true
  })
  reports?: ReportUpdateManyWithoutReporterNestedInput | undefined;
}
