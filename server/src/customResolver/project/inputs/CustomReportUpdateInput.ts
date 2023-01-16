import { Field, InputType } from "type-graphql";

import { 
  AccountUpdateOneWithoutReportsNestedInput, 
  CityProjectUpdateOneWithoutReportNestedInput, 
  DateTimeFieldUpdateOperationsInput, 
  EnumReportTypeFieldUpdateOperationsInput, 
  IncidentUpdateOneWithoutReportNestedInput, 
  StringFieldUpdateOperationsInput 
} from "../../../../prisma/generated/type-graphql";

import { ValidateNested } from "class-validator";

import { Location } from "./CreateLocation";


@InputType("ReportUpdateInput", {
  isAbstract: true
})
export class CustomReportUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  report_id?: StringFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @Field(_type => Location, {
    nullable: true
  })
  location?: Location | undefined;
  
  @ValidateNested()
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @Field(_type => EnumReportTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  report_type?: EnumReportTypeFieldUpdateOperationsInput | undefined;

  @ValidateNested()
  @Field(_type => AccountUpdateOneWithoutReportsNestedInput, {
    nullable: true
  })
  reporter?: AccountUpdateOneWithoutReportsNestedInput | undefined;

  @ValidateNested()
  @Field(_type => CityProjectUpdateOneWithoutReportNestedInput, {
    nullable: true
  })
  city_porject?: CityProjectUpdateOneWithoutReportNestedInput | undefined;

  @ValidateNested()
  @Field(_type => IncidentUpdateOneWithoutReportNestedInput, {
    nullable: true
  })
  incident?: IncidentUpdateOneWithoutReportNestedInput | undefined;
}
