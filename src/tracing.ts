import {NextFunction, Request, Response} from 'express';
import {v4 as uuidv4} from 'uuid';
import {createNamespace} from 'cls-hooked';

const session = createNamespace('BYTE_LOGGER');

export const setCorrelationId = (cid: string): void => {
    session.set('cid', cid);
};

export const getCorrelationId = (): string | undefined => {
    return session.get('cid');
};

export const requestTraceMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const cid = uuidv4();
    session.run(() => {
        setCorrelationId(cid);
        next();
    });
};