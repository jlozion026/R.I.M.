import { sign } from "jsonwebtoken";
import { Account } from "prisma/generated/type-graphql";

export const createAccessToken = (account: Account) => {
    return sign({accId: account.acc_id},process.env.ACCESS_TOKEN_SECRET!, {expiresIn: "30m"});  
  }

  export const createRefreshToken = (account: Account) => {
    return sign({accId: account.acc_id}, process.env.REFRESH_TOKEN_SECRET!, {expiresIn: "7d"});
  }