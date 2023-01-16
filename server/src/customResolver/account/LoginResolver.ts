import { Args, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { ApolloError } from "apollo-server-express";

import { Context } from "src/Context";

import {Account,FindFirstAccountArgs} from "../../../prisma/generated/type-graphql";

import { findUserByEmail, verifyPassword } from "./utils/account.service";
import { createAccessToken, createRefreshToken } from "./utils/Auth";
import { sendRefreshToken } from "./utils/sendRefreshToken";

@ObjectType()
export class LoginResponseSuccess{
    @Field()
    accessToken: String;
    @Field()
    account: Account
}

@Resolver(() => Account)
export class LoginResolver {
  @Mutation(() => LoginResponseSuccess, { nullable: true })
  async login(
    @Args() args: FindFirstAccountArgs,
    @Ctx() ctx: Context,
    @Ctx() { res }: Context
  ): Promise<LoginResponseSuccess | null> {
    try {
      const account = await findUserByEmail(args, ctx);
      if (!account) {
        throw new ApolloError("Invalid Credentials", "VALIDATION_FAILED");
      }

      const isValid = await verifyPassword({
        password: account.password,
        candidatePassword: <string | Buffer>args.where?.password?.equals,
      });
      if (!isValid) {
        throw new ApolloError("Invalid Credentials", "VALIDATION_FAILED");
      }

      // *Refresh Token
      sendRefreshToken(res, createRefreshToken(account));

      // *Access Token
      return {
        accessToken: createAccessToken(account),
        account: account,
      };
    } catch (err) {
      throw err;
    }
  }
}
