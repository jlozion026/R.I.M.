import { Ctx, Mutation, Resolver } from "type-graphql";

import { Context } from "src/Context";


@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() { res }: Context) {

    res.cookie('auth_token', '', {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/refresh_token",
      maxAge: -1
    });

    return true;
  }
}
