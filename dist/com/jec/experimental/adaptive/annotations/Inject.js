"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiConnectorRefs_1 = require("../jcad/JdiConnectorRefs");
const InvalidInjectionPointError_1 = require("../exceptions/InvalidInjectionPointError");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Inject(context) {
    return function (...args) {
        let ctx = null;
        let result = null;
        let lastArg = null;
        const argLen = args.length;
        if (argLen === 3) {
            lastArg = args[2];
            if (lastArg === undefined) {
                ctx = CTXM.getContext(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_FIELD_CONNECTOR_REF);
                result = DCM.getDecorator(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_FIELD_CONNECTOR_REF, ctx).decorate(args[0], args[1], context);
            }
            else if (typeof lastArg === jec_commons_1.PrimitiveType.NUMBER) {
                ctx = CTXM.getContext(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF);
                result = DCM.getDecorator(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF, ctx).decorate(args[0], args[1], lastArg, context);
            }
        }
        else {
            throw new InvalidInjectionPointError_1.InvalidInjectionPointError(args[0]);
        }
        return result;
    };
}
exports.Inject = Inject;
