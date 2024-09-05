import { NextFunction, Request, Response } from 'express';
/**
 * Middleware to generate a unique traceId for each request
 * @param req
 * @param res
 * @param next
 */
export declare const requestTraceMiddleware: (req: Request, res: Response, next: NextFunction) => void;
/**
 * Get traceId from the current session
 */
export declare const getTraceId: () => string | undefined;
