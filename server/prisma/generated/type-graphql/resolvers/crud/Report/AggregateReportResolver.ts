import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateReportArgs } from "./args/AggregateReportArgs";
import { Report } from "../../../models/Report";
import { AggregateReport } from "../../outputs/AggregateReport";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Report)
export class AggregateReportResolver {
  @TypeGraphQL.Query(_returns => AggregateReport, {
    nullable: false
  })
  async aggregateReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateReportArgs): Promise<AggregateReport> {
    return getPrismaFromContext(ctx).report.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
