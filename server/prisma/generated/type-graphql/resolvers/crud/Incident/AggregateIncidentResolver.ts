import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateIncidentArgs } from "./args/AggregateIncidentArgs";
import { Incident } from "../../../models/Incident";
import { AggregateIncident } from "../../outputs/AggregateIncident";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Incident)
export class AggregateIncidentResolver {
  @TypeGraphQL.Query(_returns => AggregateIncident, {
    nullable: false
  })
  async aggregateIncident(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIncidentArgs): Promise<AggregateIncident> {
    return getPrismaFromContext(ctx).incident.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
