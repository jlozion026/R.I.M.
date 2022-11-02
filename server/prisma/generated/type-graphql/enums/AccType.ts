import * as TypeGraphQL from "type-graphql";

export enum AccType {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(AccType, {
  name: "AccType",
  description: undefined,
});
