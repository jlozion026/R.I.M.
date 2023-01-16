import { MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";


@InputType("PasswordFieldUpdateOperationsInput", {
  isAbstract: true
})
export class PasswordFieldUpdateOperationsInput {
    @MinLength(8, {message: "password must be greater than 8"})
    @Field(_type => String, {
        nullable: true
     })
     set?: string | undefined;
}
