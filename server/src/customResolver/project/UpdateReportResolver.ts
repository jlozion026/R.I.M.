import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";

import { Report } from "../../../prisma/generated/type-graphql";

import { isAuth } from "../account/middleware/isAuth";

import { CustomUpdateOneReportArgs } from "./args/CustomUpdateReportArgs";

import { getPrismaFromContext} from "../../../prisma/generated/type-graphql/helpers";

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

    return getPrismaFromContext(ctx).report.update({
      ...args,
    });
  }
}
