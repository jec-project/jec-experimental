"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiError_1 = require("./JdiError");
class InvalidInjectionPointError extends JdiError_1.JdiError {
    constructor(target) {
        super(`InvalidInjectionPointError: ${target.name}.js`);
    }
}
exports.InvalidInjectionPointError = InvalidInjectionPointError;
