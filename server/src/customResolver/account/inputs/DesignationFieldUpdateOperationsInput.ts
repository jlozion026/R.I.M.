import { IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType("DesignationFieldUpdateOperationsInput", {
  isAbstract: true
})
export class DesignationFieldUpdateOperationsInput {
  @IsNotEmpty({message: "designation must not be empty"})
  @Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
