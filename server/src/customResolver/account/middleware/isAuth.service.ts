
import { ApolloError } from "apollo-server-express";
import { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken"


export function handleJWTError(err: any) {
    if (err instanceof TokenExpiredError) {
      throw new ApolloError ('Token has expired', "UNAUTHORIZED" );
    } 
    
    else if (err instanceof JsonWebTokenError) {
      throw new ApolloError("Invalid Token. Please Login", "UNAUTHORIZED");
    } 
    
    else {
      throw new ApolloError("An unknown error occurred. Please try again later.", "ERROR_UNKNOWN");
    }
  }