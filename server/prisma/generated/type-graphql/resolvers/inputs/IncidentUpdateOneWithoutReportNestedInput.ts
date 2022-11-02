import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IncidentCreateOrConnectWithoutReportInput } from "../inputs/IncidentCreateOrConnectWithoutReportInput";
import { IncidentCreateWithoutReportInput } from "../inputs/IncidentCreateWithoutReportInput";
import { IncidentUpdateWithoutReportInput } from "../inputs/IncidentUpdateWithoutReportInput";
import { IncidentUpsertWithoutReportInput } from "../inputs/IncidentUpsertWithoutReportInput";
import { IncidentWhereUniqueInput } from "../inputs/IncidentWhereUniqueInput";

@TypeGraphQL.InputType("IncidentUpdateOneWithoutReportNestedInput", {
  isAbstract: true
})
export class IncidentUpdateOneWithoutReportNestedInput {
  @TypeGraphQL.Field(_type => IncidentCreateWithoutReportInput, {
    nullable: true
  })
  create?: IncidentCreateWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentCreateOrConnectWithoutReportInput, {
    nullable: true
  })
  connectOrCreate?: IncidentCreateOrConnectWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => IncidentUpsertWithoutReportInput, {
    nullable: true
  })
  upsert?: IncidentUpsertWithoutReportInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => IncidentWhereUniqueInput, {
    nullable: true
  })
  connect?: IncidentWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IncidentUpdateWithoutReportInput, {
    nullable: true
  })
  update?: IncidentUpdateWithoutReportInput | undefined;
}
