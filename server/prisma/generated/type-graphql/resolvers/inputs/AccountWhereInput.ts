import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumAccTypeFilter } from "../inputs/EnumAccTypeFilter";
import { ReportListRelationFilter } from "../inputs/ReportListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("AccountWhereInput", {
  isAbstract: true
})
export class AccountWhereInput {
  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  AND?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  OR?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AccountWhereInput], {
    nullable: true
  })
  NOT?: AccountWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  acc_id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumAccTypeFilter, {
    nullable: true
  })
  acc_type?: EnumAccTypeFilter | undefined;

  @TypeGraphQL.Field(_type => ReportListRelationFilter, {
    nullable: true
  })
  reports?: ReportListRelationFilter | undefined;
}
