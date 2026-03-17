/**
 * Validate fighter creation data.
 * @param data - Unknown data to validate
 * @returns Validation result with any error messages
 */
export declare function validateFighterData(data: unknown): {
    valid: boolean;
    errors: string[];
};
/**
 * Validate battle request data.
 * @param data - Unknown data to validate
 * @returns Validation result with any error messages
 */
export declare function validateBattleRequest(data: unknown): {
    valid: boolean;
    errors: string[];
};
/**
 * Sanitize user input string.
 * @param input - Raw user input
 * @returns Sanitized string
 */
export declare function sanitizeInput(input: string): string;
//# sourceMappingURL=validators.d.ts.map