import "dotenv/config";
import argon2 from "argon2";

import { Context } from "src/Context";

import {CreateOneAccountArgs,FindFirstAccountArgs} from "prisma/generated/type-graphql";

export async function createUser(args: CreateOneAccountArgs, ctx: Context) {
  const hashedPassword = await argon2.hash(args.data.password);
  return ctx.prisma.account.create({
    data: {
      email: args.data.email.toLowerCase(),
      password: hashedPassword,
      acc_type: args.data.acc_type,
      designation: args.data.designation,
    },
  });
}

export async function findUserByEmail(args: FindFirstAccountArgs, ctx: Context) {
  return ctx.prisma.account.findFirst({
    where: {
      email: args.where?.email?.equals?.toLowerCase(),
    },
  });
}

export async function verifyPassword({password,candidatePassword}: {
  password: string;
  candidatePassword: string | Buffer;
}) {
  return argon2.verify(password, candidatePassword);
}
