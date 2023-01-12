// import * as TypeGraphQL from "type-graphql";
// import graphqlFields from "graphql-fields";
// import { GraphQLResolveInfo } from "graphql";
// import { Report } from "../../../prisma/generated/type-graphql";
// import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../prisma/generated/type-graphql/helpers";
// import { CustomUpdateOneReportArgs } from "./args/CustomUpdateReportArgs";

// @TypeGraphQL.Resolver(_of => Report)
// export class UpdateOneReportResolver {
//   @TypeGraphQL.Mutation(_returns => Report, {
//     nullable: true
//   })
//   async updateOneReport(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CustomUpdateOneReportArgs): Promise<Report | null> {
//     const { _count } = transformFields(
//       graphqlFields(info as any)
//     );
//     return getPrismaFromContext(ctx).report.update({
//       ...args,
//       ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
//     });
//   }
// }
