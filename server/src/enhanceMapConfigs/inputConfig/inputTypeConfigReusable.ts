import {IsDate,IsNotEmpty,} from "class-validator";

import { InputTypeConfig } from "../../../prisma/generated/type-graphql";
  
// * Reusable Update Input Types
  
  export const dateTimeFieldUpdateOperationsInput: InputTypeConfig<"DateTimeFieldUpdateOperationsInput"> = {
    fields: {
      set: [IsDate({message: "must be date"})]
    }
  }
  export const stringFieldUpdateOperationInput: InputTypeConfig<"DateTimeFieldUpdateOperationsInput"> = {
    fields: {
      set: [IsNotEmpty({message: "must not be empty"})]
    }
  }
  export const floatFieldUpdateOperationsInput: InputTypeConfig<"FloatFieldUpdateOperationsInput"> = {
    fields: {
      set: [IsNotEmpty({message: "must not be empty"})]
    }
  }
  export const enumReportTypeFieldUpdateOperationsInput: InputTypeConfig<"EnumReportTypeFieldUpdateOperationsInput"> = {
    fields: {
      set: [IsNotEmpty({message: "must not be empty"})]
    }
  }
  