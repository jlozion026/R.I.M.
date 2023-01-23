import { Prisma } from "@prisma/client";
import { Context } from "src/Context";
import { CustomCreateOneReportArgs } from "../args/CustomCreateOneReportArgs";
import { CustomUpdateOneReportArgs } from "../args/CustomUpdateReportArgs";

export async function isCreateReportExist(args: CustomCreateOneReportArgs, ctx: Context) {
    const location: unknown = args.data.location;
   
    return ctx.prisma.report.findFirst({
        where: {
            AND: [
                {description: args.data.description},
                {report_type: args.data.report_type},
                {location: {equals: <Prisma.InputJsonValue>location}},
            ] 
        }
    })
}

export async function isUpdateReportExist(args: CustomUpdateOneReportArgs, ctx: Context) {
    const location: unknown = args.data.location;
    
    return ctx.prisma.report.findFirst({
        where: {
            AND: [
                {description: args.data.description?.set},
                {report_type: args.data.report_type?.set},
                {location: {equals: <Prisma.InputJsonValue>location}},
                {OR : [
                    {
                        incident: {
                            AND: [
                                {date_started: args.data.incident?.update?.date_started?.set},
                                {date_ended: args.data.incident?.update?.date_ended?.set},
                            ]
                        }
                    },

                    {
                        city_project: {
                            AND: [
                                {project_name: args.data.city_project?.update?.project_name?.set},
                                {contractor_name: args.data.city_project?.update?.contractor_name?.set},
                                {date_started: args.data.city_project?.update?.date_started?.set},
                                {date_ended: args.data.city_project?.update?.date_ended?.set},
                                {source_fund: args.data.city_project?.update?.source_fund?.set},
                                {project_ammount: args.data.city_project?.update?.project_ammount?.set},
                                {contract_ammount: args.data.city_project?.update?.contract_ammount?.set},
                            ]

                        }
                    },
                ]
                
            
            }
                                
            ]
        }
    })
}