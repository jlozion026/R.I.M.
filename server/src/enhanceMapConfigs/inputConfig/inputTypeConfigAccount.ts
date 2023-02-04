import {IsEmail,IsLowercase,IsNotEmpty,MinLength,} from "class-validator";
import { IsEmailAlreadyExist } from "../../customResolver/account/middleware/isEmailAlreadyExist";
import { InputTypeConfig } from "../../../prisma/generated/type-graphql";

// * Account Create
export const accountsInputTypesConfig: InputTypeConfig<"AccountCreateInput"> = {
  fields: { 
    email: [IsEmail({},{message: "email must be an email"}),IsLowercase(), <PropertyDecorator>(IsEmailAlreadyExist({ message: "email already exist" })),],
    password: [MinLength(8, {message: "must be longer than or equal to 8 characters"})],
    designation: [IsNotEmpty({message: "designation must not be empty"})],
    acc_type: [IsNotEmpty()]
  },
};
