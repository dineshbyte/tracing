import {createNamespace} from 'cls-hooked';
import {NextFunction, Request, Response} from 'express';
import {v4 as uuidv4} from 'uuid';

const session = createNamespace('BYTE_LOGGER');

/**
 * Middleware to generate a unique traceId for each request
 * @param req
 * @param res
 * @param next
 */
export const requestTraceMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const traceId = uuidv4();
    session.run(() => {
        session.set('traceId', traceId);
        next();
    });
};

/**
 * Get traceId from the current session
 */
export const getTraceId = (): string | undefined => {
    return session.get('traceId');
};