import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken";
import { decodedJWTSchema } from "../schemas/user-schemas";

export const AuthMiddleware = (req: Request, res: Response, next: NextFunction) => { 
    if(!req.headers.authorization) {
        res.status(403).send({ message: "No token provided!" })
        return;
    }

    const token = req.headers.authorization.split(" ")[1]
    if(!token) {
        res.status(403).send({ message: "No token provided!" })
        return;
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')
        req.context = {
            decodedJWT: decoded as decodedJWTSchema
        }
        console.log({decoded})
        next()
    } catch {
        res.status(401).send({ message: "Unauthorized!" })
        return;
    }
  }