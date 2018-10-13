"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiError_1 = require("./JdiError");
class AmbiguousResolutionError extends JdiError_1.JdiError {
    constructor(message) {
        super(`AmbiguousResolutionError: ${message}`);
        this.message = message;
    }
}
exports.AmbiguousResolutionError = AmbiguousResolutionError;
