import { NonEmptyArray } from "type-graphql";

import { RegisterResolver } from "./custom_resolver/account/RegisterResolver";
import { LoginResolver } from "./custom_resolver/account/LoginResolver";


import { CreateOneCityProjectResolver, 
    CreateOneIncidentResolver, 
    CreateOneReportResolver, 
    FindManyAccountResolver, 
    FindManyCityProjectResolver, 
    FindManyIncidentResolver, 
    FindManyReportResolver } from "../prisma/generated/type-graphql";


export const resolver =  [
    FindManyAccountResolver,
    RegisterResolver,
    LoginResolver,

    FindManyCityProjectResolver,
    CreateOneCityProjectResolver,

    FindManyIncidentResolver,
    CreateOneIncidentResolver,

    FindManyReportResolver, 
    CreateOneReportResolver,
    ] as NonEmptyArray<Function>