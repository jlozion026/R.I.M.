import { NonEmptyArray } from "type-graphql";

import {
  AggregateReportResolver,
  CityProjectRelationsResolver,
  CreateOneAccountResolver,
  DeleteOneAccountResolver,
  DeleteOneReportResolver,
  FindFirstReportResolver,
  FindManyCityProjectResolver,
  FindManyIncidentResolver,
  FindManyReportResolver,
  FindUniqueCityProjectResolver,
  FindUniqueIncidentResolver,
  FindUniqueReportResolver,
  IncidentRelationsResolver,
  ReportRelationsResolver,
} from "../prisma/generated/type-graphql";

import { LoginResolver } from "./customResolver/account/LoginResolver";
import { LogoutResolver } from "./customResolver/account/LogoutResolver";
import { RegisterOneAccountResolver } from "./customResolver/account/RegisterOneAccountResolver";
import { UpdateAccountResolver } from "./customResolver/account/UpdateOneAccountResolver";
import { CreateReportResolver } from "./customResolver/project/CreateReportResolver";
import { UpdateReportResolver } from "../src/customResolver/project/UpdateReportResolver";


export const resolver = [
  // *Login Resolvers
  LoginResolver,
  LogoutResolver,

  // *Create
  CreateOneAccountResolver,
  RegisterOneAccountResolver,
  CreateReportResolver,

  // *Read
  FindManyReportResolver,
  FindUniqueReportResolver,
  ReportRelationsResolver,
  FindFirstReportResolver,
  
  FindManyCityProjectResolver,
  FindUniqueCityProjectResolver,
  CityProjectRelationsResolver,
  
  FindManyIncidentResolver,
  FindUniqueIncidentResolver,
  IncidentRelationsResolver,
  
  AggregateReportResolver,

  // *Update 
  UpdateAccountResolver,
  UpdateReportResolver, 

  // *Delete
  DeleteOneAccountResolver,
  DeleteOneReportResolver,

] as NonEmptyArray<Function>;
