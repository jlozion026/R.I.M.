import { Report } from "../../../prisma/generated/type-graphql/models/Report"
import { getPrismaFromContext } from "../../../prisma/generated/type-graphql/helpers";
import { CustomCreateOneReportArgs } from "./args/CustomCreateOneReportArgs";
import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { isAuth } from "../account/middleware/isAuth";

@Resolver(_of => Report)
export class CreateOneReportResolver {
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
