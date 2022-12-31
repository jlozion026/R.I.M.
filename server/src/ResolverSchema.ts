import { NonEmptyArray } from "type-graphql";

import {
  CreateOneAccountResolver,
  CreateOneCityProjectResolver,
  CreateOneIncidentResolver,
  CreateOneReportResolver,
  FindManyAccountResolver,
  FindManyCityProjectResolver,
  FindManyIncidentResolver,
  FindManyReportResolver,
} from "../prisma/generated/type-graphql";
import { LoginResolver } from "./customResolver/account/LoginResolver";
import { LogoutResolver } from "./customResolver/account/LogoutResolver";
import { RegisterOneAccountResolver } from "./customResolver/account/RegisterOneAccountResolver";
import { UpdateAccountResolver } from "./customResolver/account/UpdateRegOneAccountResolver";


export const resolver = [
  // *Login Resolvers
  LoginResolver,
  LogoutResolver,

  // *Create
  CreateOneAccountResolver,
  RegisterOneAccountResolver,
  CreateOneReportResolver,
  // CreateOneCityProjectResolver,
  // CreateOneIncidentResolver,

  // *Read
  FindManyAccountResolver,
  FindManyReportResolver,
  FindManyCityProjectResolver,
  FindManyIncidentResolver,

  // *Update
  // ! Having a problem on Validation 
  // 
  UpdateAccountResolver,

  // *Delete
] as NonEmptyArray<Function>;
