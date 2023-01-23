import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Report } from "../../../prisma/generated/type-graphql/models/Report"

import { isAuth } from "../account/middleware/isAuth";

import { CustomCreateOneReportArgs } from "./args/CustomCreateOneReportArgs";

import { getPrismaFromContext } from "../../../prisma/generated/type-graphql/helpers";
import { ApolloError } from "apollo-server-express";
import { isCreateReportExist } from "./utils/report.service";

@Resolver(_of => Report)
export class CreateReportResolver {
  @UseMiddleware(isAuth)
  @Mutation(_returns => Report, {
    nullable: false
  })
  async createOneReport(
    @Ctx() ctx: any, 
    @Args() args: CustomCreateOneReportArgs
    ): Promise<Report> {

      const isReport = await isCreateReportExist(args, ctx) 
      if (isReport) {
        throw new ApolloError("Report Already Exist", "VALIDATION_ERROR")
      }

      return getPrismaFromContext(ctx).report.create({
      ...args,
      });
  }
}
