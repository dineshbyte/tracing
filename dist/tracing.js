"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTraceId = exports.requestTraceMiddleware = void 0;
const cls_hooked_1 = require("cls-hooked");
const uuid_1 = require("uuid");
const session = (0, cls_hooked_1.createNamespace)('BYTE_LOGGER');
/**
 * Middleware to generate a unique traceId for each request
 * @param req
 * @param res
 * @param next
 */
const requestTraceMiddleware = (req, res, next) => {
    const traceId = (0, uuid_1.v4)();
    session.run(() => {
        session.set('traceId', traceId);
        next();
    });
};
exports.requestTraceMiddleware = requestTraceMiddleware;
/**
 * Get traceId from the current session
 */
const getTraceId = () => {
    return session.get('traceId');
};
exports.getTraceId = getTraceId;
