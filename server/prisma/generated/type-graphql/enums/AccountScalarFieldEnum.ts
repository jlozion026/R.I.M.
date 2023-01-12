import * as TypeGraphQL from "type-graphql";

export enum AccountScalarFieldEnum {
  acc_id = "acc_id",
  email = "email",
  password = "password",
  designation = "designation",
  acc_type = "acc_type"
}
TypeGraphQL.registerEnumType(AccountScalarFieldEnum, {
  name: "AccountScalarFieldEnum",
  description: undefined,
});
