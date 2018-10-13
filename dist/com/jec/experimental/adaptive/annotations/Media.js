"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MediaConnectorRefs_1 = require("../jcad/MediaConnectorRefs");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Media(params) {
    return function (target) {
        const ctx = CTXM.getContext(MediaConnectorRefs_1.MediaConnectorRefs.MEDIA_CONNECTOR_REF);
        return DCM.getDecorator(MediaConnectorRefs_1.MediaConnectorRefs.MEDIA_CONNECTOR_REF, ctx)
            .decorate(target, params);
    };
}
exports.Media = Media;
