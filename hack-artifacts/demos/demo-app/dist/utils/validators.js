"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFighterData = validateFighterData;
exports.validateBattleRequest = validateBattleRequest;
exports.sanitizeInput = sanitizeInput;
/**
 * Validate fighter creation data.
 * @param data - Unknown data to validate
 * @returns Validation result with any error messages
 */
function validateFighterData(data) {
    // TODO: implement validation
    // - emoji must be a single emoji character
    // - name must be 1-30 characters, alphanumeric + spaces
    // - hp must be 50-200
    // - attack must be 1-20
    // - defense must be 1-20
    // - special must be a non-empty string under 50 chars
    return { valid: true, errors: [] };
}
/**
 * Validate battle request data.
 * @param data - Unknown data to validate
 * @returns Validation result with any error messages
 */
function validateBattleRequest(data) {
    // TODO: implement validation
    // - fighter1Id and fighter2Id must be valid UUIDs
    // - fighter1Id !== fighter2Id (can't fight yourself)
    return { valid: true, errors: [] };
}
/**
 * Sanitize user input string.
 * @param input - Raw user input
 * @returns Sanitized string
 */
function sanitizeInput(input) {
    // TODO: implement sanitization
    // - trim whitespace
    // - remove HTML tags
    // - escape special characters
    return input;
}
//# sourceMappingURL=validators.js.map