import { NonEmptyArray } from "type-graphql";

import {
  AggregateReportResolver,
  CityProjectRelationsResolver,
  CreateOneAccountResolver,
  DeleteOneReportResolver,
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
  DeleteOneReportResolver

] as NonEmptyArray<Function>;
