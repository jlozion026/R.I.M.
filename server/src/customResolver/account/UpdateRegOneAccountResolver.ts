import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import {
  Account,
  UpdateOneAccountArgs,
} from "../../../prisma/generated/type-graphql";

import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../prisma/generated/type-graphql/helpers";

import argon2 from "argon2";

// ! Conflict with the Validation due to nested field 

@TypeGraphQL.Resolver((_of) => Account)
export class UpdateAccountResolver {
  @TypeGraphQL.Mutation((_returns) => Account, {
    nullable: true,
  })
  async updateAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneAccountArgs
  ): Promise<Account | null> {
    const password = args.data.password?.set ?? "testpass1234";
    const hashedPassword = await argon2.hash(password);
    const { _count } = transformFields(graphqlFields(info as any));

    return getPrismaFromContext(ctx).account.update({
      ...args,
      data: {
        ...args.data,
        password: hashedPassword,
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
