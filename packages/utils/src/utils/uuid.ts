/**
 * Generates a new universally unique identifier (UUID).
 *
 * @returns {string} A string representing a new UUID.
 */
export function uuid(): string {
  return crypto.randomUUID();
}
