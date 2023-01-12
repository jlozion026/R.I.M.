import { IsEmail, IsNotEmpty } from "class-validator";
import * as TypeGraphQL from "type-graphql";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "../middleware/isEmailAlreadyExist";


@InputType("EmailFieldUpdateOperationsInput", {
  isAbstract: true
})
export class EmailFieldUpdateOperationsInput {

  
  @IsEmail({},{message: "email must be an email"})
  @IsEmailAlreadyExist({message: "email already exist"})
  @Field(_type => String, {
    nullable: true
  })
  set?: string | undefined;
}
