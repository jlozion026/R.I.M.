import { InputTypeConfig } from "prisma/generated/type-graphql";

import {
  IsDate,
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from "class-validator";

import { IsEmailAlreadyExist } from "./../../customResolver/account/middleware/isEmailAlreadyExist";


// * Account Create
export const accountsInputTypesConfig: InputTypeConfig<"AccountCreateInput"> = {
  fields: { 
    email: [IsEmail({},{message: "email must be an email"}),IsLowercase(), <PropertyDecorator>(IsEmailAlreadyExist({ message: "email already exist" })),],
    password: [MinLength(8, {message: "must be longer than or equal to 8 characters"})],
    designation: [IsNotEmpty({message: "must not be empty"})],
    acc_type: [IsNotEmpty()]
  },
};

// ? Account Update has custom input types
// ? Report Create Input  has custom input types 

// * IncidentCreateNestedOneWithoutReportInput is ValidatedNested to validate the branches of the inputTypes
export const incidentCreateNestedOneWithoutReport: InputTypeConfig<"IncidentCreateNestedOneWithoutReportInput"> =
  {
    fields: {
      _all: [ValidateNested()],

    },
  };
export const incidentCreateWithoutReport: InputTypeConfig<"IncidentCreateWithoutReportInput"> =
  {
    fields: {
      date_started: [
        IsDate({message: "date start must be date"})
      ],
      date_ended: [
        IsDate({ message: "date end must be date" })
      ],
    },
  };

// * CityProjectCreateNestedOneWithoutReportInput is ValidatedNested to validate the branches of the inputTypes
export const cityProjectCreateNestedOneWithoutReport: InputTypeConfig<"CityProjectCreateNestedOneWithoutReportInput"> =
  {
    fields: {
      _all: [ValidateNested()],
    },
  };
export const cityProjectCreateWithouReport: InputTypeConfig<"CityProjectCreateWithoutReportInput"> =
  {
    fields: {
      _all: [IsNotEmpty({ message: "must not be empty" })],
      date_started: [IsDate({ message: "start date is not a date" })],
      date_ended: [IsDate({ message: "end date is not a date" })],
    },
  };


//------------------------------------------------------------------------------------------------------------------------- //

export const incidentInputTypesConfig: InputTypeConfig<"IncidentCreateInput"> =
  {
    fields: {
      _all: [IsNotEmpty()],
      report: [ValidateNested()],
    },
  };
export const reportCreateNestedOneWithoutCityProj: InputTypeConfig<"ReportCreateNestedOneWithoutCity_porjectInput"> =
  {
    fields: {
      _all: [ValidateNested()],
    },
  };
export const reportCreateWithoutCityProj: InputTypeConfig<"ReportCreateWithoutCity_porjectInput"> =
  {
    fields: {
      _all: [IsNotEmpty()],
    },
  };

//---------------------------------------------------------------------------------------------------------------------- //

export const cityProjectInputTypesConfig: InputTypeConfig<"CityProjectCreateInput"> =
  {
    fields: {
      project_name: [IsNotEmpty({message: "project name must not be empty"})],
      contractor_name: [IsNotEmpty({message: "contractor name must not be empty"})],
    },
  };

// -------------------------------------------------------------------------------------------------------------------- //
