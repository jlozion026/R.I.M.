import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutCity_projectInput } from "../inputs/ReportCreateOrConnectWithoutCity_projectInput";
import { ReportCreateWithoutCity_projectInput } from "../inputs/ReportCreateWithoutCity_projectInput";
import { ReportUpdateWithoutCity_projectInput } from "../inputs/ReportUpdateWithoutCity_projectInput";
import { ReportUpsertWithoutCity_projectInput } from "../inputs/ReportUpsertWithoutCity_projectInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpdateOneRequiredWithoutCity_projectNestedInput", {
  isAbstract: true
})
export class ReportUpdateOneRequiredWithoutCity_projectNestedInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutCity_projectInput, {
    nullable: true
  })
  create?: ReportCreateWithoutCity_projectInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutCity_projectInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutCity_projectInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpsertWithoutCity_projectInput, {
    nullable: true
  })
  upsert?: ReportUpsertWithoutCity_projectInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutCity_projectInput, {
    nullable: true
  })
  update?: ReportUpdateWithoutCity_projectInput | undefined;
}
