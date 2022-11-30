import { verify } from "jsonwebtoken"

import { Context } from "src/Context"

import { MiddlewareFn } from "type-graphql"

export const isAuth: MiddlewareFn<Context> = (({context}, next) => {
    const authorization = context.req.headers['authorization'];

    if(!authorization) {
        // TODO: Add Error Handling and Validation
        throw new Error ('Not authenticated')
    }

    try {
        const token = authorization.split(" ")[1];   
        const payload = verify(token, process.env.ACCESS_TOKEN_SECRET!)
        context.payload = payload as any    
    } catch(err) {
        console.log(err)
        throw new Error("Not authenticated")
    }

    return next();
}) 