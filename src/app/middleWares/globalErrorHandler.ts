import { NextFunction, Request, Response } from "express"

//global error handler for handling errors for the APIs
const globalErrorHandler = (err : any, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        success: false,
        message: err.message || 'Something went wrong',
        error: err
    })
}

export default globalErrorHandler;