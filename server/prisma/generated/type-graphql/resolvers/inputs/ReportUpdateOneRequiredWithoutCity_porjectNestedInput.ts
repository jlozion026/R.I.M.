import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutCity_porjectInput } from "../inputs/ReportCreateOrConnectWithoutCity_porjectInput";
import { ReportCreateWithoutCity_porjectInput } from "../inputs/ReportCreateWithoutCity_porjectInput";
import { ReportUpdateWithoutCity_porjectInput } from "../inputs/ReportUpdateWithoutCity_porjectInput";
import { ReportUpsertWithoutCity_porjectInput } from "../inputs/ReportUpsertWithoutCity_porjectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpdateOneRequiredWithoutCity_porjectNestedInput", {
  isAbstract: true
})
export class ReportUpdateOneRequiredWithoutCity_porjectNestedInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_porjectInput, {
    nullable: true
  })
  create?: ReportCreateWithoutCity_porjectInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutCity_porjectInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCity_porjectInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpsertWithoutCity_porjectInput, {
    nullable: true
  })
  upsert?: ReportUpsertWithoutCity_porjectInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutCity_porjectInput, {
    nullable: true
  })
  update?: ReportUpdateWithoutCity_porjectInput | undefined;
}
