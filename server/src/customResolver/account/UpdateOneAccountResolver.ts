import { Args, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import {getPrismaFromContext} from "../../../prisma/generated/type-graphql/helpers";

import {Account} from "../../../prisma/generated/type-graphql";
import { CustomUpdateOneAccountArgs } from "./args/CustomUpdateOneAccountArgs";

import argon2 from "argon2";

import { isAuth } from "./middleware/isAuth";

@Resolver((_of) => Account)
export class UpdateAccountResolver {
  @UseMiddleware(isAuth)
  @Mutation((_returns) => Account, {
    nullable: true,
  })
  async updateOneAccount(
    @Ctx() ctx: any,
    @Args() args: CustomUpdateOneAccountArgs
  ): Promise<Account | null> {
    
    const password = args.data.password?.set ?? "testpass1234";
    const hashedPassword = await argon2.hash(password);
    
    return getPrismaFromContext(ctx).account.update({
      ...args,
      data: {
        ...args.data,
        password: hashedPassword,
      },
    });
  }
}
