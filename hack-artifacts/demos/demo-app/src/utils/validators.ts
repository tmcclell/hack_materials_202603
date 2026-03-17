/**
 * Validate fighter creation data.
 * @param data - Unknown data to validate
 * @returns Validation result with any error messages
 */
export function validateFighterData(data: unknown): { valid: boolean; errors: string[] } {
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
export function validateBattleRequest(data: unknown): { valid: boolean; errors: string[] } {
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
export function sanitizeInput(input: string): string {
  // TODO: implement sanitization
  // - trim whitespace
  // - remove HTML tags
  // - escape special characters
  return input;
}
