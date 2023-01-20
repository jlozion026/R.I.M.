import { Response } from "express";

export const sendRefreshToken = (res: Response, token: string) => {
    res.cookie("jid", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/refresh_token"
    });
}   
