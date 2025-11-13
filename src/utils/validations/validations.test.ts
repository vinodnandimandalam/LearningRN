// src/utils/validation.test.js

import { validateEmailLength } from './validations';

describe('validateEmailLength', () => {
  const DOMAIN_PART = '@example.com';
  const MAX_LOCAL_LENGTH = 64;

  // --- Boundary Tests: Upper Limit (64 characters) ---

  test('should return TRUE when local part is exactly the MAX_LOCAL_LENGTH (64 chars)', () => {
    // Local part is 64 'a's
    const validLocalPart = 'a'.repeat(MAX_LOCAL_LENGTH);
    const email = validLocalPart + DOMAIN_PART; // 64@example.com
    expect(validateEmailLength(email)).toBe(true);
  });

  test('should return FALSE when local part is ONE character over the boundary (65 chars)', () => {
    // Local part is 65 'a's
    const invalidLocalPart = 'a'.repeat(MAX_LOCAL_LENGTH + 1);
    const email = invalidLocalPart + DOMAIN_PART; // 65@example.com
    expect(validateEmailLength(email)).toBe(false);
  });

  // --- Boundary Tests: Lower Limit (1 character) ---

  test('should return TRUE when local part is exactly the MINIMUM (1 character)', () => {
    const email = 'a' + DOMAIN_PART; // 1@example.com
    expect(validateEmailLength(email)).toBe(true);
  });

  test('should return FALSE when local part is ZERO characters (i.e., starts with @)', () => {
    const email = DOMAIN_PART; // @example.com
    expect(validateEmailLength(email)).toBe(false);
  });

  test('should return FALSE when email is missing the @ symbol', () => {
    expect(validateEmailLength('testexample.com')).toBe(false);
  });
});
