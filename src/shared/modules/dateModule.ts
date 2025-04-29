/**
 * Функции для работы с датами.
 */
export function formatDate(date: Date, locale: string = 'en-US'): string {
    return date.toLocaleDateString(locale);
}

export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}