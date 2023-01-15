import * as TypeGraphQL from "type-graphql";
import { EnumAccTypeFieldUpdateOperationsInput, ReportUpdateManyWithoutReporterNestedInput, StringFieldUpdateOperationsInput } from "../../../../prisma/generated/type-graphql";
import { EmailFieldUpdateOperationsInput } from "./EmailFieldUpdateOperationsInput";
import { PasswordFieldUpdateOperationsInput } from "./PasswordFieldUpdateOperationsInput";
import { DesignationFieldUpdateOperationsInput } from "./DesignationFieldUpdateOperationsInput";
import { ValidateNested } from "class-validator";


@TypeGraphQL.InputType("CustomAccountUpdateInput", {
  isAbstract: true
})
export class CustomAccountUpdateInput {

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  acc_id?: StringFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @TypeGraphQL.Field(_type => EmailFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @TypeGraphQL.Field(_type => PasswordFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: PasswordFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @TypeGraphQL.Field(_type => DesignationFieldUpdateOperationsInput, {
    nullable: true
  })
  designation?: DesignationFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @TypeGraphQL.Field(_type => EnumAccTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  acc_type?: EnumAccTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateManyWithoutReporterNestedInput, {
    nullable: true
  })
  reports?: ReportUpdateManyWithoutReporterNestedInput | undefined;
}
