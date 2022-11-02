import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByIncidentArgs } from "./args/GroupByIncidentArgs";
import { Incident } from "../../../models/Incident";
import { IncidentGroupBy } from "../../outputs/IncidentGroupBy";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Incident)
export class GroupByIncidentResolver {
  @TypeGraphQL.Query(_returns => [IncidentGroupBy], {
    nullable: false
  })
  async groupByIncident(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIncidentArgs): Promise<IncidentGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).incident.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
