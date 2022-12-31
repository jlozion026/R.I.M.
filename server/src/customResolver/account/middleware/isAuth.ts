import { ApolloError } from "apollo-server-express";
import { verify } from "jsonwebtoken";

import { Context } from "src/Context";

import { MiddlewareFn } from "type-graphql";
import { handleJWTError } from "./isAuth.service";

export const isAuth: MiddlewareFn<Context> = ({ context }, next) => {
  const authorization = context.req.headers["authorization"];

  if (!authorization) {
    throw new ApolloError("Access denied!", "UNAUTHORIZED");
  }

  try {
    const token = authorization!.split(" ")[1];
    const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
    context.payload = payload as any;
  } catch (err) {
    handleJWTError(err);
  }

  return next();
};
