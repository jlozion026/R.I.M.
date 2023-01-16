import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Report } from "../../../prisma/generated/type-graphql/models/Report"

import { isAuth } from "../account/middleware/isAuth";

import { CustomCreateOneReportArgs } from "./args/CustomCreateOneReportArgs";

import { getPrismaFromContext } from "../../../prisma/generated/type-graphql/helpers";

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
      return getPrismaFromContext(ctx).report.create({
      ...args,
      });
  }
}
