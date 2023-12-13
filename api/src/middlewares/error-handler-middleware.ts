import { NextFunction, Request, Response } from "express"
import { logger } from "../utils/logger"

export const ErrorHandlerMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => { 
    let message = error.message
    let source = 'unknown'
    let treated = false
  
    if(error.name === 'PrismaClientKnownRequestError') {
      message = error.meta.message
      source = 'prisma'
    }

    logger.error({source, message, treated})
    res.status(400).json({message: 'Um erro ocorreu'})
  }