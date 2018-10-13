"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiConnectorRefs_1 = require("../jcad/JdiConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Injectable(params) {
    return function (target) {
        const ctx = CTXM.getContext(JdiConnectorRefs_1.JdiConnectorRefs.INJECTABLE_CONNECTOR_REF);
        return DCM.getDecorator(JdiConnectorRefs_1.JdiConnectorRefs.INJECTABLE_CONNECTOR_REF, ctx)
            .decorate(target, params);
    };
}
exports.Injectable = Injectable;
