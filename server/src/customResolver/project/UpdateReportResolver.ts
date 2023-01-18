import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Report } from "../../../prisma/generated/type-graphql";

import { isAuth } from "../account/middleware/isAuth";

import { CustomUpdateOneReportArgs } from "./args/CustomUpdateReportArgs";

import { getPrismaFromContext} from "../../../prisma/generated/type-graphql/helpers";
import { IsUpdateReportExist } from "./utils/report.service";
import { ApolloError } from "apollo-server-express";

@Resolver(_of => Report)
export class UpdateReportResolver {
  @UseMiddleware(isAuth)
  @Mutation(_returns => Report, {
    nullable: true
  })
  async updateOneReport(
    @Ctx() ctx: any, 
    @Args() args: CustomUpdateOneReportArgs
    ): Promise<Report | null> {
    
      const isReport = await IsUpdateReportExist(args, ctx) 
      if (isReport) {
        throw new ApolloError("Report Already Exist", "VALIDATION_ERROR")
      }

    return getPrismaFromContext(ctx).report.update({
      ...args,
    });
  }
}
