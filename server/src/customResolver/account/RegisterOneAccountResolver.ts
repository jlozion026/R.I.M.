import {Args,Authorized,Ctx,Info,Mutation,Resolver, UseMiddleware,} from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import {getPrismaFromContext,transformCountFieldIntoSelectRelationsCount,transformFields} from "../../../prisma/generated/type-graphql/helpers";

import {Account,CreateOneAccountArgs,} from "../../../prisma/generated/type-graphql";
import argon2 from "argon2";

import { isAuth } from "./middleware/isAuth";

@Resolver((_of) => Account)
export class RegisterOneAccountResolver {
  @Mutation((_returns) => Account, { nullable: false })
  @UseMiddleware(isAuth)
  @Authorized("ADMIN")
  async registerOneAccount(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneAccountArgs
  ): Promise<Account> {
    
    const { _count } = transformFields(graphqlFields(info as any));
    const hashedPassword = await argon2.hash(args.data.password);

    return getPrismaFromContext(ctx).account.create({
      data: {
        email: args.data.email.toLowerCase(),
        password: hashedPassword,
        acc_type: args.data.acc_type,
        designation: args.data.designation
      },
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
