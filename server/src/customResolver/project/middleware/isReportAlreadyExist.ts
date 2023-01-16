import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from "class-validator";
  import { PrismaClient } from "@prisma/client";
  
  const prisma = new PrismaClient();
  
  @ValidatorConstraint({ async: true })
  export class IsReportAlreadyExistConstraint
    implements ValidatorConstraintInterface
  {
    async validate(report_type: any, description: any) {
      const report = await prisma.report.findFirst({
        where: {
            report_type,
            description
        },
      });
      return !report;
    }
  }
  
  export function IsReportAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsReportAlreadyExistConstraint,
      });
    };
  }
  