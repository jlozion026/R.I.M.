import { NonEmptyArray } from "type-graphql";

import {
  CreateOneAccountResolver,
  FindManyAccountResolver,
  FindManyCityProjectResolver,
  FindManyIncidentResolver,
  FindManyReportResolver,
} from "../prisma/generated/type-graphql";
import { LoginResolver } from "./customResolver/account/LoginResolver";
import { LogoutResolver } from "./customResolver/account/LogoutResolver";
import { RegisterOneAccountResolver } from "./customResolver/account/RegisterOneAccountResolver";
import { UpdateAccountResolver } from "./customResolver/account/UpdateOneAccountResolver";
import { CreateOneReportResolver } from "./customResolver/project/CreateReportResolver";


export const resolver = [
  // *Login Resolvers
  LoginResolver,
  LogoutResolver,

  // *Create
  CreateOneAccountResolver,
  RegisterOneAccountResolver,
  CreateOneReportResolver,
  // CreateOneReportResolver,
  // CreateOneCityProjectResolver,
  // CreateOneIncidentResolver,

  // *Read
  FindManyAccountResolver,
  FindManyReportResolver,
  FindManyCityProjectResolver,
  FindManyIncidentResolver,

  // *Update 
  UpdateAccountResolver,

  // *Delete
] as NonEmptyArray<Function>;
