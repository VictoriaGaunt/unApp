/**
 * Вспомогательные функции для аутентификации.
 */
export function validateEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

export function generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
