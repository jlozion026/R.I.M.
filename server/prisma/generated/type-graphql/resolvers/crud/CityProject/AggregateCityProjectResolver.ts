import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateCityProjectArgs } from "./args/AggregateCityProjectArgs";
import { CityProject } from "../../../models/CityProject";
import { AggregateCityProject } from "../../outputs/AggregateCityProject";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CityProject)
export class AggregateCityProjectResolver {
  @TypeGraphQL.Query(_returns => AggregateCityProject, {
    nullable: false
  })
  async aggregateCityProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCityProjectArgs): Promise<AggregateCityProject> {
    return getPrismaFromContext(ctx).cityProject.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
