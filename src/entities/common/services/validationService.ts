/**
 * Общие функции валидации.
 */
export function isNotEmpty(value: string): boolean {
    return value.trim().length > 0;
}

export function isEmail(value: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
}