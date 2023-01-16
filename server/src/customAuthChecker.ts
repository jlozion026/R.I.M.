import { ApolloError } from "apollo-server-express";
import { verify } from "jsonwebtoken";
import { AuthChecker } from "type-graphql";
import { Context } from "./Context";
import { handleJWTError } from "./customResolver/account/middleware/isAuth.service";



// create auth checker function
export const CustomAuthChecker: AuthChecker<Context> = ({ context }, roles) => {

    
    const authorization = context.req.headers["authorization"];
    
    if (!authorization) {
        throw new ApolloError("Access denied!", "UNAUTHORIZED");
      }

    try {
        const token = authorization!.split(" ")[1];
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!);
        context.payload = payload as any;
        if (roles.includes(<string>context.payload?.accType)) {
            return true
        }
    } catch (err) {
        handleJWTError(err);
    }
    return false
};

