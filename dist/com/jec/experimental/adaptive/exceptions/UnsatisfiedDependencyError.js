"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiError_1 = require("./JdiError");
class UnsatisfiedDependencyError extends JdiError_1.JdiError {
    constructor(message) {
        super(`UnsatisfiedDependencyError: ${message}`);
        this.message = message;
    }
}
exports.UnsatisfiedDependencyError = UnsatisfiedDependencyError;
