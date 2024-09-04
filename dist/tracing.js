"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTraceMiddleware = exports.getCorrelationId = exports.setCorrelationId = void 0;
const uuid_1 = require("uuid");
const cls_hooked_1 = require("cls-hooked");
const session = (0, cls_hooked_1.createNamespace)('BYTE_LOGGER');
const setCorrelationId = (cid) => {
    session.set('cid', cid);
};
exports.setCorrelationId = setCorrelationId;
const getCorrelationId = () => {
    return session.get('cid');
};
exports.getCorrelationId = getCorrelationId;
const requestTraceMiddleware = (req, res, next) => {
    const cid = (0, uuid_1.v4)();
    session.run(() => {
        (0, exports.setCorrelationId)(cid);
        next();
    });
};
exports.requestTraceMiddleware = requestTraceMiddleware;
//# sourceMappingURL=tracing.js.map