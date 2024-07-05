/**
 * Converts a string into a 32-bit hash using a simple hashing algorithm.
 * This algorithm is not cryptographically secure and should not be used
 * for security-related purposes.
 *
 * @param {string} string - The input string to be hashed.
 * @returns {number} A 32-bit integer hash code representing the input string.
 */
export function stringToHash(string: string) {
    let hash = 0,
        i,
        chr
    if (string.length === 0) return hash
    for (i = 0; i < string.length; i++) {
        chr = string.charCodeAt(i)
        hash = (hash << 5) - hash + chr
        hash |= 0 // Convert to 32bit integer
    }
    return hash
}
