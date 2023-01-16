import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateOneWithoutReportsNestedInput } from "../inputs/AccountUpdateOneWithoutReportsNestedInput";
import { CityProjectUpdateOneWithoutReportNestedInput } from "../inputs/CityProjectUpdateOneWithoutReportNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumReportTypeFieldUpdateOperationsInput } from "../inputs/EnumReportTypeFieldUpdateOperationsInput";
import { IncidentUpdateOneWithoutReportNestedInput } from "../inputs/IncidentUpdateOneWithoutReportNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ReportUpdateInput", {
  isAbstract: true
})
export class ReportUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  report_id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  location?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => EnumReportTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  report_type?: EnumReportTypeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => AccountUpdateOneWithoutReportsNestedInput, {
    nullable: true
  })
  reporter?: AccountUpdateOneWithoutReportsNestedInput | undefined;

  @TypeGraphQL.Field(_type => CityProjectUpdateOneWithoutReportNestedInput, {
    nullable: true
  })
  city_porject?: CityProjectUpdateOneWithoutReportNestedInput | undefined;

  @TypeGraphQL.Field(_type => IncidentUpdateOneWithoutReportNestedInput, {
    nullable: true
  })
  incident?: IncidentUpdateOneWithoutReportNestedInput | undefined;
}
