import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ReportCreateOrConnectWithoutIncidentInput } from "../inputs/ReportCreateOrConnectWithoutIncidentInput";
import { ReportCreateWithoutIncidentInput } from "../inputs/ReportCreateWithoutIncidentInput";
import { ReportUpdateWithoutIncidentInput } from "../inputs/ReportUpdateWithoutIncidentInput";
import { ReportUpsertWithoutIncidentInput } from "../inputs/ReportUpsertWithoutIncidentInput";
import { ReportWhereUniqueInput } from "../inputs/ReportWhereUniqueInput";

@TypeGraphQL.InputType("ReportUpdateOneRequiredWithoutIncidentNestedInput", {
  isAbstract: true
})
export class ReportUpdateOneRequiredWithoutIncidentNestedInput {
  @TypeGraphQL.Field(_type => ReportCreateWithoutIncidentInput, {
    nullable: true
  })
  create?: ReportCreateWithoutIncidentInput | undefined;

  @TypeGraphQL.Field(_type => ReportCreateOrConnectWithoutIncidentInput, {
    nullable: true
  })
  connectOrCreate?: ReportCreateOrConnectWithoutIncidentInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpsertWithoutIncidentInput, {
    nullable: true
  })
  upsert?: ReportUpsertWithoutIncidentInput | undefined;

  @TypeGraphQL.Field(_type => ReportWhereUniqueInput, {
    nullable: true
  })
  connect?: ReportWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ReportUpdateWithoutIncidentInput, {
    nullable: true
  })
  update?: ReportUpdateWithoutIncidentInput | undefined;
}
