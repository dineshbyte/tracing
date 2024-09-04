import { NextFunction, Request, Response } from 'express';
export declare const setCorrelationId: (cid: string) => void;
export declare const getCorrelationId: () => string | undefined;
export declare const requestTraceMiddleware: (req: Request, res: Response, next: NextFunction) => void;
