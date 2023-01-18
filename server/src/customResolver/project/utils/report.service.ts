import { Context } from "src/Context";
import { CustomCreateOneReportArgs } from "../args/CustomCreateOneReportArgs";
import { CustomUpdateOneReportArgs } from "../args/CustomUpdateReportArgs";


export async function IsCreateReportExist(args: CustomCreateOneReportArgs, ctx: Context) {
    return ctx.prisma.report.findFirst({
        where: {
            AND: [
                {description: args.data.description},
                {report_type: args.data.report_type},
            ]
        }
    })
}

export async function IsUpdateReportExist(args: CustomUpdateOneReportArgs, ctx: Context) {
    return ctx.prisma.report.findFirst({
        where: {
            AND: [
                {description: args.data.description?.set},
                {report_type: args.data.report_type?.set},
            ]
        }
    })
}